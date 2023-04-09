import { ApiProperty } from '@nestjs/swagger';
import { LogInfoDTO } from 'src/domains/logger/models/log-info.model';
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

  @ApiProperty()
  createdLogInfo: LogInfoDTO;

  @ApiProperty()
  updatedLogInfo?: LogInfoDTO;

  // constructor(entity: ProductCategoryEntity) {
  //   this.id = entity.id;
  //   this.title = entity.title;
  //   this.order = entity.order;
  //   this.type = new ProductCategoryTypeDTO(entity.type);

  //   const createdLog = entity.logs.find(
  //     (c) => c.type.id === LogTypeEnum.Create,
  //   );

  //   this.createdLogInfo = new LogInfoDTO(createdLog);
  //   console.log(createdLog);
  // }
}
