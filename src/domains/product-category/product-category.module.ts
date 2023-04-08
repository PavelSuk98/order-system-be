import { Module } from '@nestjs/common';
import { LogHttpModule } from '../logger/log-http.module';
import { AdminProductCategoryController } from './controllers/admin-product-category.controller';
import { ProductCategoryHttpModule } from './product-category-http.module';

@Module({
  imports: [ProductCategoryHttpModule],
  providers: [],
  controllers: [AdminProductCategoryController],
})
export class ProductCategoryModule {}
