import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AdminOrderService {
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
}
