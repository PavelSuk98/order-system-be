import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ServiceOrderController } from './controllers/service-order.controller';
import { ServiceOrderFacade } from './service-order.facade';
import { ServiceOrderService } from './services/service-order.service';

@Module({
  controllers: [ServiceOrderController],
  providers: [ServiceOrderFacade, ServiceOrderService, PrismaService],
})
export class ServiceOrderModule {}
