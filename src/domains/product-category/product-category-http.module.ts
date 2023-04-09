import { Module } from '@nestjs/common';
import { LogHttpModule } from '../logger/log-http.module';
import { ProductCategoryTypeService } from './services/product-category-type.service';
import { ProductCategoryFacade } from './services/product-category.facade';
import { ProductCategoryService } from './services/product-category.service';

@Module({
  imports: [LogHttpModule],
  providers: [
    ProductCategoryService,
    ProductCategoryTypeService,
    ProductCategoryFacade,
  ],
  exports: [ProductCategoryFacade],
})
export class ProductCategoryHttpModule {}
