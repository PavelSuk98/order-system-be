import { ApiProperty } from '@nestjs/swagger';

export class OrderTableProductFilterDTO {
  @ApiProperty()
  tableId?: string;
}
