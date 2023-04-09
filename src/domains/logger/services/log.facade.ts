import { Injectable } from '@nestjs/common';
import { LogService } from './log.service';

@Injectable()
export class LogFacade {
  constructor(private readonly logService: LogService) {}

  // async create(log: CreateLogModel): Promise<void> {
  //   await this.logService.create(log);
  // }

  // async findAll(filter: SearchLogModel): Promise<LogEntity[]> {
  //   return this.logService.findAll(filter);
  // }
}
