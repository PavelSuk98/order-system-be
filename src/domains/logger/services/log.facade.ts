import { Injectable } from '@nestjs/common';
import { CreateLogModel } from '../models/create-log.model';
import { LogService } from './log.service';

@Injectable()
export class LogFacade {
  constructor(private readonly logService: LogService) {}

  async create(log: CreateLogModel): Promise<void> {
    await this.logService.create(log);

    const items = await this.logService.findAll();

    console.log(items);
    console.log(items);
  }
}
