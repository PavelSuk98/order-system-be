import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryTypeEntity } from '../entities/product-category-type.entity';

export class ProductCategoryTypeDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  constructor(entity: ProductCategoryTypeEntity) {
    this.id = entity.id;
    this.name = entity.name;
  }
}
