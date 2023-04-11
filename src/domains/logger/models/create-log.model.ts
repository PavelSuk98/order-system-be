import { Prisma } from '@prisma/client';
import { LogTypeEnum } from './log-type.enum';
import { LoggedEntitiesModel } from './logged-entities.model';

export class CreateLogModel extends LoggedEntitiesModel {
  createdByUserId: string;
  logType: LogTypeEnum;
  oldObject: any;
  newObject: any;
}
