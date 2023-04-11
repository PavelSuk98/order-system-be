import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  stateId: string;

  @ApiProperty()
  typeId: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  categoryId: string;
}
