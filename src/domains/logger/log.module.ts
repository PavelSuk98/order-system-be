import { Module } from '@nestjs/common';
import { LogController } from './controllers/log.controller';
import { LogHttpModule } from './log-http.module';

@Module({
  imports: [LogHttpModule],
  controllers: [LogController],
  providers: [],
})
export class LogModule {}
