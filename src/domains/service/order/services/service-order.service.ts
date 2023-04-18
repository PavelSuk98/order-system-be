import { Injectable } from '@nestjs/common';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';
import { CreateOrderDTO } from '../models/create-order.dto';
import { OrderTableProductFilterDTO } from '../models/order-table-product-filter.dto';

@Injectable()
export class ServiceOrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(order: CreateOrderDTO): Promise<void> {
    const orderEntity = await this.prisma.order.create({
      data: {
        totalPaid: order.totalPaid,
        totalPrice: order.productTotalPrice,
        managedByEmployeeId: RoleGuard.currentUserId,
        paymentTypeId: order.paymentType,
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
