import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogTypeEntity } from './entities/log-type.entity';
import { LogEntity } from './entities/log.entity';
import { LogFacade } from './services/log.facade';
import { LogService } from './services/log.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity, LogTypeEntity])],
  providers: [LogService, LogFacade],
  exports: [LogFacade],
})
export class LogHttpModule {}
