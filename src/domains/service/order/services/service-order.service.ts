import { Injectable } from '@nestjs/common';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';
import { OrderTableProductFilterDTO } from '../models/order-table-product-filter.dto';

@Injectable()
export class ServiceOrderTableProductService {
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
              where: { id: product.productId },
            })
          ).price,
          managedByEmployeeId: RoleGuard.currentUserId,
          customerAdditionalRequirements:
            product.customerAdditionalRequirements,
        };
      }),
    );

    return await this.prisma.$transaction(
      createOrderTableProductEntities.map((data) =>
        this.prisma.orderTableProduct.create({
          data,
          include: {
            product: {
              include: {
                category: true,
              },
            },
            table: {
              include: {
                tableArea: true,
              },
            },
          },
        }),
      ),
    );
    // does not return entities ids, only count
    // return this.prisma.orderTableProduct.createMany({
    //   data: createOrderTableProductEntities,
    // });
  }

  getActiveOrderTableProducts(search: OrderTableProductFilterDTO) {
    return this.prisma.orderTableProduct.findMany({
      where: {
        orderId: null,
        ...(search.tableId && {
          tableId: search.tableId,
        }),
      },
      include: {
        product: {
          include: {
            category: true,
          },
        },
        table: {
          include: {
            tableArea: true,
          },
        },
      },
    });
  }
}
