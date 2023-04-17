import { Injectable } from '@nestjs/common';
import { OrderService } from './services/order.service';

@Injectable()
export class OrderFacade {
  constructor(private readonly orderService: OrderService) {}
}
