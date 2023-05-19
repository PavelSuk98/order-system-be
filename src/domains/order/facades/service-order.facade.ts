import { Injectable } from '@nestjs/common';
import { CreateOrderTableProductDTO } from '../models/services/create-order-table-product.dto';
import { OrderTableProductService } from '../services/order-table-product.service';
import { CreateOrderDTO } from '../models/services/create-order.dto';
import { ServiceOrderTableProductDTO } from '../models/services/service-order-table-product.dto';
import { OrderTableProductFilterDTO } from '../models/services/order-table-product-filter.dto';
import { OrderService } from '../services/order.service';
import { RoleGuard } from '@domains/identity/infrastructure/role.guard';

@Injectable()
export class ServiceOrderFacade {
  constructor(
    private readonly orderTableProductService: OrderTableProductService,
    private readonly orderService: OrderService,
  ) {}

  async createOrder(order: CreateOrderDTO): Promise<void> {
    order.productTotalPrice =
      await this.orderTableProductService.getOrderTableProductTotalPrice(
        order.orderTableProductIds,
      );

    const products =
      await this.orderTableProductService.getOrderTableProductTableIds(
        order.orderTableProductIds,
      );

    if (products.length === 0) {
      return; //FIXME: Do proper throw error here for user!
    }

    order.tableId = products[0].tableId;

    const createdOrder = await this.orderService.create({
      data: {
        totalPaid: order.totalPaid,
        totalPrice: order.productTotalPrice,
        managedByEmployeeId: RoleGuard.currentUserId,
        paymentTypeId: order.paymentType,
        tableId: order.tableId,
      },
    });

    await this.orderTableProductService.updateAll({
      where: {
        id: { in: order.orderTableProductIds },
      },
      data: {
        orderId: createdOrder.id,
      },
    });
  }

  async deleteOrderTableProduct(id: string) {
    await this.orderTableProductService.delete({
      where: {
        id,
      },
    });
  }

  async createOrderTableProduct(
    order: CreateOrderTableProductDTO[],
  ): Promise<ServiceOrderTableProductDTO[]> {
    const orders = await this.orderTableProductService.createOrderTableProduct(
      order,
    );

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
