import { Injectable } from '@nestjs/common';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrderTableProduct(
    createOrderTableProductDTO: CreateOrderTableProductDTO[],
  ) {
    const createOrderTableProductEntities = await Promise.all(
      createOrderTableProductDTO.map(async (product) => {
        return {
          productId: product.productId,
          tableId: product.tableId,
          productPrice: (
            await this.prisma.product.findFirst({
              where: { id: '' },
            })
          ).price,
          managedByEmployeeId: RoleGuard.currentUserId,
        };
      }),
    );

    this.prisma.orderTableProduct.createMany({
      data: createOrderTableProductEntities,
    });
  }
}
