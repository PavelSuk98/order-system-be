import { ApiProperty } from '@nestjs/swagger';
import { ProductCategory } from '@prisma/client';
import { LogInfoDTO } from 'src/domains/logger/models/log-info.model';
import { ProductCategoryTypeDTO } from './product-category-type.dto';

export class ProductCategoryDTO implements ProductCategory {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  createdLogInfo: LogInfoDTO;

  @ApiProperty()
  updatedLogInfo?: LogInfoDTO;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  type: ProductCategoryTypeDTO;

  typeId: string;

  isActive: boolean;

  constructor({ type, ...data }: Partial<ProductCategoryDTO>) {
    Object.assign(this, data);
    console.log('type', type);
    console.log(data);
    // this.id = entity.id;
    // this.title = entity.title;
    // this.order = entity.order;
    // this.type = new ProductCategoryTypeDTO(entity.type);

    // const createdLog = entity.logs.find(
    //   (c) => c.type.id === LogTypeEnum.Create,
    // );

    // this.createdLogInfo = new LogInfoDTO(createdLog);
    // console.log(createdLog);
  }
}
