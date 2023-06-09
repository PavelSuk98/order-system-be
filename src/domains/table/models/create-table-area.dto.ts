import { ApiProperty } from '@nestjs/swagger';
import { TableArea } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class CreateTableAreaDTO implements TableArea {
  @Exclude()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  order: number;

  @Exclude()
  deleted: Date;
}
