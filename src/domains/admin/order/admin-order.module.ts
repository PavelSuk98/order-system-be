import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdminOrderFacade } from './admin-order-facade';
import { AdminOrderController } from './controllers/admin-order.controller';
import { AdminOrderService } from './services/admin-order.service';

@Module({
  controllers: [AdminOrderController],
  providers: [AdminOrderFacade, AdminOrderService, PrismaService],
})
export class AdminOrderModule {}
