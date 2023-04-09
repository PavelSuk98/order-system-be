import { Module } from '@nestjs/common';
import { LogHttpModule } from '../logger/log-http.module';

@Module({
  imports: [LogHttpModule],
  providers: [],
  exports: [],
})
export class ProductHttpModule {}
