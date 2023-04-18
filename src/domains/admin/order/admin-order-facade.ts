import { Injectable } from '@nestjs/common';
import { OrderDetailDTO } from './models/order-detail.dto';
import { OrderDTO } from './models/order.dto';
import { AdminOrderService } from './services/admin-order.service';

@Injectable()
export class AdminOrderFacade {
  constructor(private readonly orderService: AdminOrderService) {}

  async getOrders(): Promise<OrderDTO[]> {
    const orders = await this.orderService.findAll();

    return orders.map((c) => new OrderDTO(c));
  }

  async getOrder(id: string): Promise<OrderDetailDTO> {
    const order = await this.orderService.findOne(id);

    return new OrderDetailDTO(order);
  }
}
