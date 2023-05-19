import { Injectable } from '@nestjs/common';
import { CreateOrderTableProductDTO } from '../models/services/create-order-table-product.dto';
import { ServiceOrderTableProductService } from '../services/service-order-table-product.service';
import { CreateOrderDTO } from '../models/services/create-order.dto';
import { ServiceOrderTableProductDTO } from '../models/services/service-order-table-product.dto';
import { OrderTableProductFilterDTO } from '../models/services/order-table-product-filter.dto';
import { OrderService } from '../services/order.service';

@Injectable()
export class ServiceOrderFacade {
  constructor(
    private readonly orderTableProductService: ServiceOrderTableProductService,
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
