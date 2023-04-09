import { ApiProperty } from '@nestjs/swagger';

export class ProductCategoryTypeDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  // constructor(entity: ProductCategoryTypeEntity) {
  //   this.id = entity.id;
  //   this.name = entity.name;
  // }
}
