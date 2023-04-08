import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCategoryDTO {
  createdByUserId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;
}
