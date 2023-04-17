import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LogHttpModule } from '../logger/log-http.module';
import { TableAreaService } from './services/table-area.service';
import { TableStateService } from './services/table-state.service';
import { TableService } from './services/table.service';
import { TableFacade } from './table.facade';

@Module({
  imports: [LogHttpModule],
  providers: [
    TableFacade,
    TableStateService,
    TableAreaService,
    TableService,
    PrismaService,
  ],
  exports: [TableFacade],
})
export class TableHttpModule {}
