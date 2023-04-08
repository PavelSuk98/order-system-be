import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryEntity } from '../entities/product-category.entity';
import { ProductCategoryTypeDTO } from './product-category-type.dto';

export class ProductCategoryDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  type: ProductCategoryTypeDTO;

  constructor(entity: ProductCategoryEntity) {
    this.id = entity.id;
    this.title = entity.title;
    this.order = entity.order;
    this.type = new ProductCategoryTypeDTO(entity.type);
  }
}
