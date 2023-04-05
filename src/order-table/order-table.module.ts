import { Module } from '@nestjs/common';
import { OrderTableService } from './order-table.service';
import { OrderTableController } from './order-table.controller';

@Module({
  controllers: [OrderTableController],
  providers: [OrderTableService]
})
export class OrderTableModule {}
