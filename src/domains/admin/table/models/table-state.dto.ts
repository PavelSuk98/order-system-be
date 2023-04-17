import { ApiProperty } from '@nestjs/swagger';
import { TableState } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class TableStateDTO implements TableState {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @Exclude()
  deleted: Date;

  constructor(data: Partial<TableStateDTO>) {
    Object.assign(this, data);
  }
}
