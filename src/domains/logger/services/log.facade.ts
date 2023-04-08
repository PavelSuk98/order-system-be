import { Injectable } from '@nestjs/common';
import { LogService } from './log.service';

@Injectable()
export class LogFacade {
  constructor(private readonly logService: LogService) {}
}
