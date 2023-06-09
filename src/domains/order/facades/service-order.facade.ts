import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderTableProductDTO } from '../models/services/create-order-table-product.dto';
import { OrderTableProductService } from '../services/order-table-product.service';
import { CreateOrderDTO } from '../models/services/create-order.dto';
import { ServiceOrderTableProductDTO } from '../models/services/service-order-table-product.dto';
import { OrderTableProductFilterDTO } from '../models/services/order-table-product-filter.dto';
import { OrderService } from '../services/order.service';
import { RoleGuard } from '@domains/identity/infrastructure/role.guard';
import { MoveOrderTableProductsDTO } from '../models/services/move-order-table-product.dto';
import { OrderProductPaymentService } from './order-product-payment.service';

@Injectable()
export class ServiceOrderFacade {
  constructor(
    private readonly orderTableProductService: OrderTableProductService,
    private readonly orderService: OrderService,
    private readonly paymentService: OrderProductPaymentService,
  ) {}

  async moveOrderTableProducts(
    movement: MoveOrderTableProductsDTO,
  ): Promise<void> {
    const itemsToMove =
      await this.orderTableProductService.getOrderTableProductsById(
        movement.orderTableProductIds,
      );

    if (itemsToMove.length === 0) {
      throw new BadRequestException('0', 'Products to move does not exists');
    }

    // all items are on one table
    const oldTableId = itemsToMove[0].tableId;

    await this.orderTableProductService.moveOrderTableProducts(
      itemsToMove.map((c) => c.id),
      movement.moveToTableId,
    );

    await this.orderTableProductService.recalculateTableState(oldTableId);
    await this.orderTableProductService.recalculateTableState(
      movement.moveToTableId,
    );
  }

  async createOrder(order: CreateOrderDTO): Promise<void> {
    order.productTotalPrice = order.totalPrice;

    const products =
      await this.orderTableProductService.getOrderTableProductTableIds(
        order.orderTableProductPayments.map((c) => c.orderTableProductId),
      );

    if (products.length === 0) {
      throw new BadRequestException('Can not find ordered products!');
    }

    order.tableId = products[0].tableId;

    const createdOrder = await this.orderService.create({
      data: {
        totalPaid: order.totalPaid,
        totalPrice: order.productTotalPrice,
        tip: order.totalPaid - order.productTotalPrice,
        managedByEmployeeId: RoleGuard.currentUserId,
        paymentTypeId: order.paymentType,
        tableId: order.tableId,
      },
    });

    //  vytvorit dilci platby za produkt
    await this.paymentService.addPayments(
      order.orderTableProductPayments,
      createdOrder.id,
    );

    // TODO: Check, ktere produkty dilci platbou obsahli cenu >=
    // TODO: tyto produkty nastavit na stole jako zaplacene
    for await (const c of order.orderTableProductPayments) {
      await this.orderTableProductService.update({
        where: {
          id: c.orderTableProductId,
        },
        data: {
          orderId: createdOrder.id,
          paid: await this.orderTableProductService.isProductPaid(
            c.orderTableProductId,
          ),
        },
      });
    }

    await this.orderTableProductService.recalculateTableState(order.tableId);
  }

  async deleteOrderTableProduct(id: string) {
    const orderTableProduct = await this.orderTableProductService.delete({
      where: {
        id,
      },
    });

    await this.orderTableProductService.recalculateTableState(
      orderTableProduct.tableId,
    );
  }

  async createOrderTableProduct(
    order: CreateOrderTableProductDTO[],
  ): Promise<ServiceOrderTableProductDTO[]> {
    if (order.length === 0) {
      throw new BadRequestException('Zero ordered products');
    }

    const orders = await this.orderTableProductService.createOrderTableProduct(
      order,
    );

    // order is always on 1 table at the time, so taking first item and tableId is safe
    await this.orderTableProductService.recalculateTableState(order[0].tableId);

    return orders.map((c: any) => new ServiceOrderTableProductDTO(c));
  }

  async getActiveOrderTableProducts(
    search: OrderTableProductFilterDTO,
  ): Promise<ServiceOrderTableProductDTO[]> {
    const orders =
      await this.orderTableProductService.getActiveOrderTableProducts(search);

    return orders.map((c: any) => new ServiceOrderTableProductDTO(c));
  }

  async markAsPrepared(id: string): Promise<void> {
    await this.orderTableProductService.update({
      where: {
        id: id,
      },
      data: {
        productPreparedDate: new Date(),
      },
    });
  }
}
