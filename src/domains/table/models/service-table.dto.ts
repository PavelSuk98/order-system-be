import { ServiceOrderTableProductDTO } from '@domains/order/models/services/service-order-table-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { TableDTO } from './table.dto';

export class ServiceTableDTO extends TableDTO {
  @ApiProperty({ type: ServiceOrderTableProductDTO, isArray: true })
  orderTableProducts: Partial<ServiceOrderTableProductDTO>[];

  constructor({
    tableState,
    tableArea,
    orderTableProducts,
    ...data
  }: Partial<ServiceTableDTO>) {
    super({ tableState, tableArea, ...data });

    if (orderTableProducts) {
      this.orderTableProducts = orderTableProducts.map(
        (c) => new ServiceOrderTableProductDTO(c),
      );
    }
  }
}
