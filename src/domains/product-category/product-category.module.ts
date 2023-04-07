import { Module } from '@nestjs/common';
import { ProductCategoryService } from './infrastructure/product-category.service';
import { ProductCategoryController } from './api/product-category.controller';

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
})
export class ProductCategoryModule {}
