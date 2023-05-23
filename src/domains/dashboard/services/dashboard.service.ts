import { PaymentTypeEnum } from '@domains/payment/models/payment-type.enum';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDailyIncome(paymentType: PaymentTypeEnum): Promise<number> {
    const today = new Date();
    today.setHours(0, 0);
    const aggregation = await this.prisma.order.aggregate({
      _sum: {
        totalPaid: true,
      },
      where: {
        deleted: null,
        createdDate: {
          gte: today,
        },
        paymentTypeId: paymentType,
      },
    });

    return aggregation._sum.totalPaid === null ? 0 : aggregation._sum.totalPaid;
  }
}
