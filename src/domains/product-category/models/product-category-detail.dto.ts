import { ApiProperty } from '@nestjs/swagger';
import { Log, ProductCategory } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { LogInfoDTO } from 'src/domains/logger/models/log-info.model';
import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { ProductCategoryTypeDTO } from './product-category-type.dto';
import { ProductCategoryDTO } from './product-category.dto';

export class ProductCategoryDetailDTO implements ProductCategoryDetailDTO {
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

  // TODO: interceptor co nastavi logy
  // bud je nacte create a last update a nebo je da oba undefined
  createdLog: any = {};

  lastUpdateLog?: LogInfoDTO;

  constructor({ type, ...data }: Partial<ProductCategoryDTO>) {
    Object.assign(this, data);

    if (type) {
      this.type = new ProductCategoryTypeDTO(type);
    }
  }
}
