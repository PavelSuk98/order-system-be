import { ServiceOrderTableProductDTO } from '@domains/order/models/services/service-order-table-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { TableStateDTO } from './table-state.dto';
import { TableState } from './table-state.enum';
import { TableDTO } from './table.dto';

export class ServiceTableDTO extends TableDTO {
  @ApiProperty({ type: ServiceOrderTableProductDTO, isArray: true })
  orderTableProducts: Partial<ServiceOrderTableProductDTO>[];

  constructor(
    {
      tableState,
      tableArea,
      orderTableProducts,
      ...data
    }: Partial<ServiceTableDTO>,
    tableStates: TableStateDTO[],
  ) {
    super({ tableState, tableArea, ...data });

    if (orderTableProducts) {
      this.orderTableProducts = orderTableProducts.map(
        (c) => new ServiceOrderTableProductDTO(c),
      );

      if (orderTableProducts.length !== 0) {
        const tableState = tableStates.find((c) => c.id === TableState.Ordered);

        if (tableState) {
          this.tableState = new TableStateDTO(tableState);
        }
      }
    }
  }
}
