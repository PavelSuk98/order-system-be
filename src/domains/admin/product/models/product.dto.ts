import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { ProductCategoryDTO } from '../../product-category/models/product-category.dto';
import { ProductStateDTO } from './product-state.dto';

export class ProductDTO implements Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imgUrl: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  category: ProductCategoryDTO;

  @ApiProperty()
  productState: ProductStateDTO;

  @Exclude()
  categoryId: string;

  @Exclude()
  productStateId: string;

  @Exclude()
  deleted: Date | null;

  constructor({ category, productState, ...data }: Partial<ProductDTO>) {
    Object.assign(this, data);

    if (category) {
      this.category = new ProductCategoryDTO(category);
    }

    if (productState) {
      this.productState = new ProductStateDTO(productState);
    }
  }
}
