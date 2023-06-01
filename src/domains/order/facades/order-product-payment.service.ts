import { RoleGuard } from '@domains/identity/infrastructure/role.guard';
import { Injectable } from '@nestjs/common';
import { OrderTableProductPayment } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { OrderTableProductPaymentDTO } from '../models/services/order-table-product-payment.dto';

@Injectable()
export class OrderProductPaymentService {
  constructor(private readonly prisma: PrismaService) {}

  addPayments(payments: OrderTableProductPaymentDTO[], orderId: string) {
    return this.prisma.$transaction(
      payments.map((data) =>
        this.prisma.orderTableProductPayment.create({
          data: {
            orderTableProductId: data.orderTableProductId,
            orderId,
            totalPaid: data.paidAmount,
            managedByEmployeeId: RoleGuard.currentUserId,
          },
        }),
      ),
    );
  }
}
