import { Injectable } from '@nestjs/common';
import { CreateOrderTableProductDTO } from './models/create-order-table-product.dto';
import { CreateOrderDTO } from './models/create-order.dto';
import { OrderTableProductFilterDTO } from './models/order-table-product-filter.dto';
import { ServiceOrderTableProductDTO } from './models/service-order-table-product.dto';
import { ServiceOrderTableProductService } from './services/service-order-table-product.service';
import { ServiceOrderService } from './services/service-order.service';

@Injectable()
export class ServiceOrderFacade {
  constructor(
    private readonly orderTableProductService: ServiceOrderTableProductService,
    private readonly orderService: ServiceOrderService,
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
      return;
    }

    order.tableId = products[0].tableId;

    await this.orderService.create(order);
  }

  async deleteOrderTableProduct(id: string) {
    await this.orderTableProductService.delete(id);
  }

  async createOrderTableProduct(
    order: CreateOrderTableProductDTO[],
  ): Promise<ServiceOrderTableProductDTO[]> {
    const orders = await this.orderTableProductService.createOrderTableProduct(
      order,
    );

    return orders.map((c) => new ServiceOrderTableProductDTO(c)) as any;
  }

  async getActiveOrderTableProducts(
    search: OrderTableProductFilterDTO,
  ): Promise<ServiceOrderTableProductDTO[]> {
    const orders =
      await this.orderTableProductService.getActiveOrderTableProducts(search);

    return orders.map((c) => new ServiceOrderTableProductDTO(c)) as any;
  }

  async markAsPrepared(id: string): Promise<void> {
    await this.orderTableProductService.markAsPrepared(id);
  }
}
