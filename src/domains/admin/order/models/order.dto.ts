import { ApiProperty } from '@nestjs/swagger';
import { Order, Table } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { UserDTO } from '../../identity/domain/user.dto';
import { PaymentTypeDTO } from '../../payment/models/payment-type.dto';
import { TableDTO } from '../../table/models/table.dto';

export class OrderDTO implements Order {
  @ApiProperty()
  id: string;
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  totalPaid: number;
  @ApiProperty()
  createdDate: Date;

  @ApiProperty({ type: PaymentTypeDTO })
  paymentType: PaymentTypeDTO;

  @ApiProperty({ type: UserDTO })
  managedByEmployee: UserDTO;

  @ApiProperty({ type: TableDTO })
  table: Partial<TableDTO>;

  @ApiProperty()
  orderTableProductCount: number;

  @Exclude()
  paymentTypeId: string;
  @Exclude()
  deleted: Date;
  @Exclude()
  customerId: string;
  @Exclude()
  managedByEmployeeId: string;
  @Exclude()
  tableId: string;
  @Exclude()
  _count: any;

  constructor({
    paymentType,
    managedByEmployee,
    table,
    _count,
    ...data
  }: Partial<OrderDTO>) {
    Object.assign(this, data);

    if (table) {
      this.table = new TableDTO(table);
    }

    if (paymentType) {
      this.paymentType = new PaymentTypeDTO(paymentType);
    }

    if (managedByEmployee) {
      this.managedByEmployee = new UserDTO(managedByEmployee);
    }

    if (_count && _count.orderTableProducts) {
      this.orderTableProductCount = _count.orderTableProducts;
    }
  }
}
