import { PaymentTypeEnum } from '@domains/payment/models/payment-type.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { OrderTableProductPaymentDTO } from './order-table-product-payment.dto';

export class CreateOrderDTO {
  @ApiProperty()
  orderTableProductPayments: OrderTableProductPaymentDTO[];
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  totalPaid: number;
  @ApiProperty()
  paymentType: PaymentTypeEnum;
  @Exclude()
  productTotalPrice: number;
  @Exclude()
  tableId: string;
}
