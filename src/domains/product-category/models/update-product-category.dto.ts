import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryTypeEnum } from './product-category-type.enum';

export class UpdateProductCategoryDTO {
  createdByUserId: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  order: number;

  @ApiProperty({
    enum: ProductCategoryTypeEnum,
    example: [
      { Food: ProductCategoryTypeEnum.Food },
      { Hookah: ProductCategoryTypeEnum.Hookah },
      { Tea: ProductCategoryTypeEnum.Tea },
    ],
  })
  productTypeId: ProductCategoryTypeEnum;
}
