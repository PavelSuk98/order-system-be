import { Injectable } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';

@Injectable()
export class ProductCategoryFacade {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}
}
