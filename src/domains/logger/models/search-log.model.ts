import { LogTypeEnum } from './log-type.enum';
import { LoggedEntitiesModel } from './logged-entities.model';

export class SearchLogModel extends LoggedEntitiesModel {
  createdByUserId?: string;
  logType?: LogTypeEnum;
}
