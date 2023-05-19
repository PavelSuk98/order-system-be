import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LogFacade } from './log.facade';
import { LogService } from './services/log.service';

@Module({
  imports: [],
  providers: [LogService, LogFacade, PrismaService],
  exports: [LogFacade],
})
export class LogHttpModule {}
