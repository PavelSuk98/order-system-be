import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class CreateProductDTO implements Product {
  @ApiProperty()
  title: string;

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
  createdDate: Date;

  @Exclude()
  deleted: Date;

  @Exclude()
  id: string;
}
