import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ServiceOrderTableProductController } from './controllers/service-order-table-product.controller';
import { ServiceOrderFacade } from './service-order.facade';
import { ServiceOrderTableProductService } from './services/service-order.service';

@Module({
  controllers: [ServiceOrderTableProductController],
  providers: [
    ServiceOrderFacade,
    ServiceOrderTableProductService,
    PrismaService,
  ],
})
export class ServiceOrderModule {}
