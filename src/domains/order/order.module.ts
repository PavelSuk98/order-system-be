import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdminOrderFacade } from './facades/admin-order.facade';
import { AdminOrderController } from './controllers/admin-order.controller';
import { ServiceOrderFacade } from './facades/service-order.facade';
import { ServiceOrderTableProductService } from './services/service-order-table-product.service';
import { OrderService } from './services/order.service';
import { ServiceOrderController } from './controllers/service-order.controller';
import { ServiceOrderTableProductController } from './controllers/service-order-table-product.controller';

@Module({
  controllers: [
    AdminOrderController,
    ServiceOrderController,
    ServiceOrderTableProductController,
  ],
  providers: [
    OrderService,
    AdminOrderFacade,
    PrismaService,
    ServiceOrderFacade,
    ServiceOrderTableProductService,
  ],
})
export class OrderModule {}
