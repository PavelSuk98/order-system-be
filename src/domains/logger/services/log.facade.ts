import { Injectable } from '@nestjs/common';
import { LogEntity } from '../entities/log.entity';
import { CreateLogModel } from '../models/create-log.model';
import { SearchLogModel } from '../models/search-log.model';
import { LogService } from './log.service';

@Injectable()
export class LogFacade {
  constructor(private readonly logService: LogService) {}

  async create(log: CreateLogModel): Promise<void> {
    await this.logService.create(log);
  }

  async findAll(filter: SearchLogModel): Promise<LogEntity[]> {
    return this.logService.findAll(filter);
  }
}
