import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ServiceOrderTableProductController } from './controllers/service-order-table-product.controller';
import { ServiceOrderController } from './controllers/service-order.controller';
import { ServiceOrderFacade } from './service-order.facade';
import { ServiceOrderTableProductService } from './services/service-order-table-product.service';
import { ServiceOrderService } from './services/service-order.service';

@Module({
  controllers: [ServiceOrderTableProductController, ServiceOrderController],
  providers: [
    ServiceOrderFacade,
    ServiceOrderTableProductService,
    ServiceOrderService,
    PrismaService,
  ],
})
export class ServiceOrderModule {}
