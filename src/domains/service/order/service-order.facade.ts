import { Injectable } from '@nestjs/common';
import { CreateOrderTableProductDTO } from './models/create-order-table-product.dto';
import { OrderTableProductDTO } from './models/order-table-product.dto';
import { ServiceOrderService } from './services/service-order.service';

@Injectable()
export class ServiceOrderFacade {
  constructor(private readonly orderService: ServiceOrderService) {}

  async createOrderTableProduct(
    order: CreateOrderTableProductDTO[],
  ): Promise<OrderTableProductDTO[]> {
    const result = await this.orderService.createOrderTableProduct(order);

    return {} as any;
  }
}
