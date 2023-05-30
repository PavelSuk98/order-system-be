import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class CreateProductDTO implements Product {
  @ApiProperty()
  name: string | null;

  @ApiProperty()
  nameJP: string | null;

  @ApiProperty()
  order: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imgUrl: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  productStateId: string;

  @Exclude()
  deleted: Date;

  @Exclude()
  id: string;
}
