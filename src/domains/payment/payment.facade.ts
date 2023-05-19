import { Injectable } from '@nestjs/common';
import { PaymentTypeDTO } from './models/payment-type.dto';
import { PaymentTypeService } from './services/payment-type.service';

@Injectable()
export class PaymentFacade {
  constructor(private readonly paymentTypeService: PaymentTypeService) {}

  async findAllPaymentTypes(): Promise<PaymentTypeDTO[]> {
    const payments = await this.paymentTypeService.findAll();

    return payments.map((c) => new PaymentTypeDTO(c));
  }
}
