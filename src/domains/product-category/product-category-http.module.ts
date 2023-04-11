import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LogHttpModule } from '../logger/log-http.module';
import { ProductCategoryFacade } from './product-category.facade';
import { ProductCategoryTypeService } from './services/product-category-type.service';
import { ProductCategoryService } from './services/product-category.service';
@Module({
  imports: [LogHttpModule],
  providers: [
    ProductCategoryService,
    ProductCategoryTypeService,
    ProductCategoryFacade,
    PrismaService,
  ],
  exports: [ProductCategoryFacade],
})
export class ProductCategoryHttpModule {}
