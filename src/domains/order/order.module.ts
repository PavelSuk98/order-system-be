import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdminOrderFacade } from './facades/admin-order.facade';
import { AdminOrderController } from './controllers/admin-order.controller';
import { ServiceOrderFacade } from './facades/service-order.facade';
import { OrderTableProductService } from './services/order-table-product.service';
import { OrderService } from './services/order.service';
import { ServiceOrderController } from './controllers/service-order.controller';
import { ServiceOrderTableProductController } from './controllers/service-order-table-product.controller';
import { OrderProductPaymentService } from './facades/order-product-payment.service';

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
    OrderProductPaymentService,
    OrderTableProductService,
  ],
})
export class OrderModule {}
