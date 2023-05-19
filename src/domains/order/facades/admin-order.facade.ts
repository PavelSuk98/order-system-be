import { Injectable } from '@nestjs/common';
import { OrderDetailDTO } from '../models/admin/order-detail.dto';
import { OrderDTO } from '../models/admin/order.dto';
import { OrderService } from '../services/order.service';

@Injectable()
export class AdminOrderFacade {
  constructor(private readonly orderService: OrderService) {}

  async getOrders(): Promise<OrderDTO[]> {
    const orders = await this.orderService.findAll();

    return orders.map((c) => new OrderDTO(c));
  }

  async getOrder(id: string): Promise<OrderDetailDTO> {
    const order = await this.orderService.findOne(id);

    return new OrderDetailDTO(order);
  }
}
