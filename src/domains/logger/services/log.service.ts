import { Injectable } from '@nestjs/common';
import { CreateLogModel } from '../models/create-log.model';
import { LogTypeEnum } from '../models/log-type.enum';
import { SearchLogModel } from '../models/search-log.model';

@Injectable()
export class LogService {
  constructor() {}

  // async create(log: CreateLogModel): Promise<void> {
  //   const logEntity: Partial<LogEntity> = {
  //     type: { id: log.logType } as any,
  //     createdBy: { id: log.createdByUserId } as any,
  //     productCategory: log.productCategoryId
  //       ? ({ id: log.productCategoryId } as any)
  //       : undefined,
  //   };

  //   await this.logRepository.save(logEntity);
  // }

  // findAll(filter: SearchLogModel): Promise<LogEntity[]> {
  //   return this.logRepository.find({
  //     where: {
  //       ...(filter.createdByUserId && {
  //         createdBy: {
  //           id: filter.createdByUserId,
  //         },
  //       }),
  //       ...(filter.logType && {
  //         type: {
  //           id: filter.logType,
  //         },
  //       }),
  //       ...(filter.productCategoryId && {
  //         productCategory: {
  //           id: filter.productCategoryId,
  //         },
  //       }),
  //     },
  //     relations: ['createdBy', 'type', 'productCategory'],
  //   });
  // }
}
