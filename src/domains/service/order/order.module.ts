import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ServiceOrderController } from './controllers/order.controller';
import { OrderFacade } from './order.facade';
import { OrderService } from './services/order.service';

// todo rename to service
@Module({
  controllers: [ServiceOrderController],
  providers: [OrderFacade, OrderService, PrismaService],
})
export class ServiceOrderModule {}
