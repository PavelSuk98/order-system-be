import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductCategoryDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;
}
