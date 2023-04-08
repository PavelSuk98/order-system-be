import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogTypeEntity } from './entities/log-type.entity';
import { LogEntity } from './entities/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity, LogTypeEntity])],
  providers: [],
  exports: [],
})
export class LogHttpModule {}
