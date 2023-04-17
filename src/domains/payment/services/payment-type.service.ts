import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaymentTypeService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.paymentType.findMany();
  }
}
