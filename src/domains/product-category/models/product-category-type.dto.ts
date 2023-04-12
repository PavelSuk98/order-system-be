import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryType } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ProductCategoryTypeDTO implements ProductCategoryType {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdDate: Date;

  @Exclude()
  deleted: Date | null;;

  constructor(data: Partial<ProductCategoryTypeDTO>) {
    Object.assign(this, data);
  }
}
