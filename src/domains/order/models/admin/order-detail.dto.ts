import { ApiProperty } from '@nestjs/swagger';
import { OrderDTO } from './order.dto';
import { ServiceOrderTableProductDTO } from '../services/service-order-table-product.dto';

export class OrderDetailDTO extends OrderDTO {
  @ApiProperty({ type: ServiceOrderTableProductDTO, isArray: true })
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
