import { LogTypeEnum } from './log-type.enum';

export class CreateLogModel {
  createdByUserId: string;
  logType: LogTypeEnum;
  productCategoryId?: string;
}
