import { Module } from '@nestjs/common';
import { AdminProductCategoryTypeController } from './controllers/admin-product-category-type.controller';
import { AdminProductCategoryController } from './controllers/admin-product-category.controller';
import { ServiceProductCategoryTypeController } from './controllers/service-product-category-type.controller';
import { ServiceProductCategoryController } from './controllers/service-product-category.controller';
import { ProductCategoryHttpModule } from './product-category-http.module';

@Module({
  imports: [ProductCategoryHttpModule],
  providers: [],
  controllers: [
    AdminProductCategoryController,
    AdminProductCategoryTypeController,
    ServiceProductCategoryController,
    ServiceProductCategoryTypeController,
  ],
})
export class ProductCategoryModule {}
