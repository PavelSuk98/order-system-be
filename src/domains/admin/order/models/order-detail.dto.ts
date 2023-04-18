import { ApiProperty } from '@nestjs/swagger';
import { OrderTableProduct } from '@prisma/client';
import { ServiceOrderTableProductDTO } from 'src/domains/service/order/models/service-order-table-product.dto';
import { OrderDTO } from './order.dto';

export class OrderDetailDTO extends OrderDTO {
  @ApiProperty()
  orderTableProducts: ServiceOrderTableProductDTO[];

  constructor({
    paymentType,
    managedByEmployee,
    table,
    _count,
    orderTableProducts,
    ...data
  }: Partial<OrderDetailDTO>) {
    super({
      paymentType,
      managedByEmployee,
      table,
      _count,
      ...data,
    });

    if (orderTableProducts) {
      this.orderTableProducts = orderTableProducts.map(
        (c) => new ServiceOrderTableProductDTO(c),
      );
    }
  }
}
