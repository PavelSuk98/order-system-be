import { PaymentTypeEnum } from '@domains/payment/models/payment-type.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class CreateOrderDTO {
  @ApiProperty()
  orderTableProductIds: string[];
  @ApiProperty()
  totalPaid: number;
  @ApiProperty()
  paymentType: PaymentTypeEnum;
  @Exclude()
  productTotalPrice: number;
  @Exclude()
  tableId: string;
}
