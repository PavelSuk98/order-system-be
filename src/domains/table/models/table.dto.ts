import { ApiProperty } from '@nestjs/swagger';
import { Table } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { TableAreaDTO } from './table-area.dto';
import { TableStateDTO } from './table-state.dto';

export class TableDTO implements Table {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  qrKey: string;

  @ApiProperty()
  tableState: TableStateDTO;

  @ApiProperty()
  tableArea: TableAreaDTO;

  @Exclude()
  tableStateId: string;

  @Exclude()
  tableAreaId: string;

  @Exclude()
  deleted: Date | null;

  constructor({ tableState, tableArea, ...data }: Partial<TableDTO>) {
    Object.assign(this, data);

    if (tableState) {
      this.tableState = new TableStateDTO(tableState);
    }

    if (tableArea) {
      this.tableArea = new TableAreaDTO(tableArea);
    }
  }
}
