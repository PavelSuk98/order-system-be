import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  createOrderTableProduct(
    createOrderTableProductDTO: CreateOrderTableProductDTO,
  ) {
    this.prisma.orderTableProduct.createMany({
      data: [
        {
          productId: createOrderTableProductDTO.productId,
          tableId: createOrderTableProductDTO.tableId,
          productPrice: 0,
        },
      ],
    });
  }
}
