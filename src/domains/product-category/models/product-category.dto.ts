import { ApiProperty } from '@nestjs/swagger';

export class ProductCategoryDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;
}
