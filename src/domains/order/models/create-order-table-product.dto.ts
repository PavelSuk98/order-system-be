import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderTableProductDTO {
  @ApiProperty()
  tableId: string;
  @ApiProperty()
  productId: string;
}
