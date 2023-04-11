import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LogHttpModule } from '../logger/log-http.module';
import { ProductFacade } from './product.facade';
import { ProductStateService } from './services/product-state.service';

@Module({
  imports: [LogHttpModule],
  providers: [ProductFacade, ProductStateService, PrismaService],
  exports: [ProductFacade],
})
export class ProductHttpModule {}
