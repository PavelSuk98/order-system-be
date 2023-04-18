import { OrderDTO } from './order.dto';

export class OrderDetailDTO extends OrderDTO {
  constructor({
    paymentType,
    managedByEmployee,
    table,
    ...data
  }: Partial<OrderDTO>) {
    super({ paymentType, managedByEmployee, table, ...data });
  }
}
