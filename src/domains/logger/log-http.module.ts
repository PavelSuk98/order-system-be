import { Module } from '@nestjs/common';
import { LogFacade } from './services/log.facade';
import { LogService } from './services/log.service';

@Module({
  imports: [],
  providers: [LogService, LogFacade],
  exports: [LogFacade],
})
export class LogHttpModule {}
