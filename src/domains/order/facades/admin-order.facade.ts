import { ListItemModel } from '@domains/shared/domain/list-item.interface';
import { Injectable } from '@nestjs/common';
import { OrderDetailDTO } from '../models/admin/order-detail.dto';
import { OrderDTO } from '../models/admin/order.dto';
import { OrderService } from '../services/order.service';

@Injectable()
export class AdminOrderFacade {
  constructor(private readonly orderService: OrderService) {}

  async getOrders(): Promise<ListItemModel<OrderDTO>> {
    const orders = await this.orderService.findAll({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
        managedByEmployee: {
          include: {
            role: true,
          },
        },
        paymentType: true,
        table: {
          include: {
            tableArea: true,
          },
        },
      },
    });

    return {
      list: orders.map((c) => new OrderDTO(c)),
    };
  }

  async getOrder(id: string): Promise<OrderDetailDTO> {
    const order = await this.orderService.findOne({
      where: {
        id,
      },
      include: {
        _count: {
          select: {
            products: true,
          },
        },
        orderTableProducts: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
            table: {
              include: {
                tableArea: true,
              },
            },
          },
        },
        managedByEmployee: {
          include: {
            role: true,
          },
        },
        paymentType: true,
        table: {
          include: {
            tableArea: true,
          },
        },
      },
    });

    return new OrderDetailDTO(order);
  }
}
