import { ApiProperty } from '@nestjs/swagger';

export class MoveOrderTableProductsDTO {
  @ApiProperty({ isArray: true })
  orderTableProductIds: string[];
  @ApiProperty()
  moveToTableId: string;
}
