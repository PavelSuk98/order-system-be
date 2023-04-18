import { Injectable } from '@nestjs/common';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';
import { OrderTableProductFilterDTO } from '../models/order-table-product-filter.dto';

@Injectable()
export class ServiceOrderTableProductService {
  constructor(private readonly prisma: PrismaService) {}

  delete(id: string) {
    return this.prisma.orderTableProduct.delete({
      where: {
        id,
      },
    });
  }
  async getOrderTableProductTableIds(orderTableProductIds: string[]) {
    return this.prisma.orderTableProduct.findMany({
      where: {
        id: { in: orderTableProductIds },
        orderId: null,
      },
      select: {
        tableId: true,
      },
    });
  }
  async getOrderTableProductTotalPrice(
    orderTableProductIds: string[],
  ): Promise<number> {
    const aggregation = await this.prisma.orderTableProduct.aggregate({
      _sum: {
        productPrice: true,
      },
      where: {
        id: { in: orderTableProductIds },
        orderId: null,
      },
    });

    return aggregation._sum.productPrice;
  }
  // where: {
  //   id: { in: orderTableProductIds },
  // },

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

  async markAsPrepared(id: string) {
    await this.prisma.orderTableProduct.update({
      where: {
        id: id,
      },
      data: {
        productPreparedDate: new Date(),
      },
    });
  }
}
