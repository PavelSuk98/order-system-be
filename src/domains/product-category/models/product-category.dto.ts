import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryEntity } from '../entities/product-category.entity';

export class ProductCategoryDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;

  constructor(entity: ProductCategoryEntity) {
    this.id = entity.id;
    this.title = entity.title;
    this.order = entity.order;
  }
}
