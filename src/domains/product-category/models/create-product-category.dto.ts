import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCategoryDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;
}
