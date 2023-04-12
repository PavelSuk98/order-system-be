import { ApiProperty } from '@nestjs/swagger';
import { Log, ProductCategory } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { LogInfoDTO } from 'src/domains/logger/models/log-info.model';
import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { ProductCategoryTypeDTO } from './product-category-type.dto';

export class ProductCategoryDTO implements ProductCategory {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  type: Partial<ProductCategoryTypeDTO>;

  @Exclude()
  typeId: string;

  @Exclude()
  deleted: Date | null;;

  constructor({ type, ...data }: Partial<ProductCategoryDTO>) {
    Object.assign(this, data);
  }
}
