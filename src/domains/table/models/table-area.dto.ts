import { ApiProperty } from '@nestjs/swagger';
import { TableArea } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class TableAreaDTO implements TableArea {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @Exclude()
  deleted: Date;

  constructor(data: Partial<TableAreaDTO>) {
    Object.assign(this, data);
  }
}
