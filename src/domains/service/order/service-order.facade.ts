import { Injectable } from '@nestjs/common';
import { CreateOrderTableProductDTO } from './models/create-order-table-product.dto';
import { OrderTableProductFilterDTO } from './models/order-table-product-filter.dto';
import { ServiceOrderTableProductDTO } from './models/service-order-table-product.dto';
import { ServiceOrderTableProductService } from './services/service-order.service';

@Injectable()
export class ServiceOrderFacade {
  constructor(
    private readonly orderTableProductService: ServiceOrderTableProductService,
  ) {}

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
}
