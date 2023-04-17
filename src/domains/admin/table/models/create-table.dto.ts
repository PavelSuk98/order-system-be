import { ApiProperty } from '@nestjs/swagger';
import { Table } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class CreateTableDTO implements Table {
  @ApiProperty()
  name: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  qrKey: string;

  @ApiProperty()
  tableStateId: string;

  @ApiProperty()
  tableAreaId: string;

  @Exclude()
  id: string;

  @Exclude()
  deleted: Date | null;
}
