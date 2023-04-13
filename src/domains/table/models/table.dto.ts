import { ApiProperty } from '@nestjs/swagger';
import { Table } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class TableDTO implements Table {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  order: number;
  @ApiProperty()
  qrKey: string;

  @Exclude()
  tableStateId: string;

  @Exclude()
  tableAreaId: string;
}
