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
            orderTableProduct: true,
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
