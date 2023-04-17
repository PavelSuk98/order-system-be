import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { OrderController } from './controllers/order.controller';
import { OrderFacade } from './order.facade';
import { OrderService } from './services/order.service';

// todo rename to service
@Module({
  controllers: [OrderController],
  providers: [OrderFacade, OrderService, PrismaService],
})
export class ServiceOrderModule {}
