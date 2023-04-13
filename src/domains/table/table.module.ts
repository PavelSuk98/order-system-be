import { Module } from '@nestjs/common';
import { TableAreaController } from './controllers/table-area.controller';
import { AdminTableStateController } from './controllers/table-state.controller';
import { TableHttpModule } from './table-http.module';

@Module({
  imports: [TableHttpModule],
  controllers: [AdminTableStateController, TableAreaController],
  providers: [],
})
export class TableModule {}
