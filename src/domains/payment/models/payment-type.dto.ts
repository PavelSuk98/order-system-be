import { PaymentType } from '@prisma/client';

export class PaymentTypeDTO implements PaymentType {
  id: string;
  name: string;

  constructor(data: Partial<PaymentTypeDTO>) {
    Object.assign(this, data);
  }
}
