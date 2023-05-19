import { ApiProperty } from '@nestjs/swagger';
import { ProductCategory } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { ProductCategoryTypeDTO } from './product-category-type.dto';

export class ProductCategoryDTO implements ProductCategory {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  type: Partial<ProductCategoryTypeDTO>;

  @Exclude()
  typeId: string;

  @Exclude()
  deleted: Date | null;

  constructor({ type, ...data }: Partial<ProductCategoryDTO>) {
    Object.assign(this, data);

    if (type) {
      this.type = new ProductCategoryTypeDTO(type);
    }
  }
}
