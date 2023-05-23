import { Module } from '@nestjs/common';
import { ServiceTableController } from './controllers/service-table.controller';
import { TableAreaController } from './controllers/table-area.controller';
import { AdminTableStateController } from './controllers/table-state.controller';
import { AdminTableController } from './controllers/table.controller';
import { TableHttpModule } from './table-http.module';

@Module({
  imports: [TableHttpModule],
  controllers: [
    AdminTableStateController,
    TableAreaController,
    AdminTableController,
    ServiceTableController,
  ],
  providers: [],
})
export class TableModule {}
