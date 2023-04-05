import { Module } from '@nestjs/common';
import { ProductController } from './api/product.controller';
import { ProductService } from './infrastructure/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
