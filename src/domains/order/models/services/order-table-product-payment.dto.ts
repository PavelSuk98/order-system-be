import { ApiProperty } from '@nestjs/swagger';

export class OrderTableProductPaymentDTO {
  @ApiProperty()
  orderTableProductId: string;
  @ApiProperty()
  paidAmount: number;
}
