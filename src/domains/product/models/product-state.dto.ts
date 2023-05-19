import { ApiProperty } from '@nestjs/swagger';
import { ProductState } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ProductStateDTO implements ProductState {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @Exclude()
  deleted: Date | null;

  constructor(data: Partial<ProductStateDTO>) {
    Object.assign(this, data);
  }
}
