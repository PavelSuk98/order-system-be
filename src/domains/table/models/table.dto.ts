import { ServiceOrderTableProductDTO } from '@domains/order/models/services/service-order-table-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Table } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { TableAreaDTO } from './table-area.dto';
import { TableStateDTO } from './table-state.dto';
import { TableState } from './table-state.enum';

export class TableDTO implements Table {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  qrKey: string;

  @ApiProperty()
  tableState: TableStateDTO;

  @ApiProperty()
  tableArea: TableAreaDTO;

  @ApiProperty({ type: ServiceOrderTableProductDTO, isArray: true })
  orderTableProducts: Partial<ServiceOrderTableProductDTO>[];

  @Exclude()
  tableStateId: string;

  @Exclude()
  tableAreaId: string;

  @Exclude()
  deleted: Date | null;

  constructor({
    tableState,
    tableArea,
    orderTableProducts,
    ...data
  }: Partial<TableDTO>) {
    Object.assign(this, data);

    if (tableState) {
      this.tableState = new TableStateDTO(tableState);
    }

    if (tableArea) {
      this.tableArea = new TableAreaDTO(tableArea);
    }

    if (orderTableProducts) {
      this.orderTableProducts = orderTableProducts.map(
        (c) => new ServiceOrderTableProductDTO(c),
      );
    }
  }
}
