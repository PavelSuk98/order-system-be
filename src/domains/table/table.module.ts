import { Module } from '@nestjs/common';
import { AdminTableStateController } from './controllers/table-state.controller';
import { TableHttpModule } from './table-http.module';

@Module({
  imports: [TableHttpModule],
  controllers: [AdminTableStateController],
  providers: [],
})
export class TableModule {}
