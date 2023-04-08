import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryTypeEnum } from './product-category-type.enum';

export class CreateProductCategoryDTO {
  createdByUserId: string;

  @ApiProperty()
  title: string;

  @ApiProperty({
    enum: ProductCategoryTypeEnum,
    example: [
      { Food: ProductCategoryTypeEnum.Food },
      { Pipe: ProductCategoryTypeEnum.Hookah },
      { Tea: ProductCategoryTypeEnum.Tea },
    ],
  })
  typeId: ProductCategoryTypeEnum;

  @ApiProperty()
  order: number;
}
