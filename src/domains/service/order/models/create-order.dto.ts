import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { PaymentTypeEnum } from 'src/domains/admin/payment/models/payment-type.enum';

export class CreateOrderDTO {
  @ApiProperty()
  orderTableProductIds: string[];
  @ApiProperty()
  totalPaid: number;
  @ApiProperty()
  paymentType: PaymentTypeEnum;
  @Exclude()
  productTotalPrice: number;
}
