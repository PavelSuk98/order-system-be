import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdminPaymentController } from './controllers/payment.controller';
import { PaymentFacade } from './payment.facade';
import { PaymentTypeService } from './services/payment-type.service';

@Module({
  controllers: [AdminPaymentController],
  providers: [PaymentFacade, PaymentTypeService, PrismaService],
})
export class PaymentModule {}
