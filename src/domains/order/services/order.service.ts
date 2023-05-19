import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDTO } from '../models/services/create-order.dto';
import { RoleGuard } from '@domains/identity/infrastructure/role.guard';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(args) {
    return this.prisma.order.findMany(args);
  }

  findOne(args) {
    return this.prisma.order.findFirst(args);
  }

  async create(args) {
    return await this.prisma.order.create(args);
  }
}
