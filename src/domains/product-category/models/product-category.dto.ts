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
  createdLogInfo: LogInfoDTO;

  @ApiProperty()
  updatedLogInfo?: LogInfoDTO;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  type: Partial<ProductCategoryTypeDTO>;

  @Exclude()
  logs: Partial<Log>[];

  @Exclude()
  typeId: string;

  @Exclude()
  isActive: boolean;

  constructor({ logs, type, ...data }: Partial<ProductCategoryDTO>) {
    Object.assign(this, data);

    const createLog = logs.find((c) => c.typeId === LogTypeEnum.Create);
    if (createLog) {
      this.createdLogInfo = new LogInfoDTO(createLog);
    }

    const lastChangeLog = logs
      .filter((c) => c.typeId !== LogTypeEnum.Create)
      .pop();

    if (lastChangeLog) {
      this.updatedLogInfo = new LogInfoDTO(lastChangeLog);
    }
  }
}
