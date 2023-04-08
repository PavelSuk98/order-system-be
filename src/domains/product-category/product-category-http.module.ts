import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogHttpModule } from '../logger/log-http.module';
import { ProductCategoryTypeEntity } from './entities/product-category-type.entity';
import { ProductCategoryEntity } from './entities/product-category.entity';
import { ProductCategoryFacade } from './services/product-category.facade';
import { ProductCategoryService } from './services/product-category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductCategoryEntity,
      ProductCategoryTypeEntity,
    ]),
    LogHttpModule,
  ],
  providers: [ProductCategoryService, ProductCategoryFacade],
  exports: [ProductCategoryFacade],
})
export class ProductCategoryHttpModule {}
