import { LogTypeEnum } from './log-type.enum';
import { LoggedEntitiesModel } from './logged-entities.model';

export class CreateLogModel extends LoggedEntitiesModel {
  createdByUserId: string;
  logType: LogTypeEnum;
  entityObject: any;
  entityId: string;
}
