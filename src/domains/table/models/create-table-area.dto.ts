import { ApiProperty } from '@nestjs/swagger';
import { TableArea } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class CreateTableAreaDTO implements TableArea {
  @Exclude()
  id: string;

  @ApiProperty()
  title: string;

  @Exclude()
  deleted: Date;
}
