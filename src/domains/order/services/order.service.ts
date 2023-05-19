import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDTO } from '../models/services/create-order.dto';
import { RoleGuard } from '@domains/identity/infrastructure/role.guard';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.order.findMany({
      include: {
        _count: {
          select: {
            orderTableProducts: true,
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
  }

  findOne(id: string) {
    return this.prisma.order.findFirst({
      where: {
        id,
      },
      include: {
        _count: {
          select: {
            orderTableProducts: true,
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
  }

  async create(order: CreateOrderDTO): Promise<void> {
    const orderEntity = await this.prisma.order.create({
      data: {
        totalPaid: order.totalPaid,
        totalPrice: order.productTotalPrice,
        managedByEmployeeId: RoleGuard.currentUserId,
        paymentTypeId: order.paymentType,
        tableId: order.tableId,
      },
    });

    await this.prisma.orderTableProduct.updateMany({
      where: {
        id: { in: order.orderTableProductIds },
      },
      data: {
        orderId: orderEntity.id,
      },
    });
  }
}
