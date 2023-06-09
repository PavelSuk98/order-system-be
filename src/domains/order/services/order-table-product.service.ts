import { TableState } from '@domains/table/models/table-state.enum';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderTableProductDTO } from '../models/services/create-order-table-product.dto';
import { OrderTableProductFilterDTO } from '../models/services/order-table-product-filter.dto';

@Injectable()
export class OrderTableProductService {
  constructor(private readonly prisma: PrismaService) {}

  async update(args) {
    return this.prisma.orderTableProduct.update(args);
  }

  async updateAll(args) {
    return this.prisma.orderTableProduct.updateMany(args);
  }

  findAll(args) {
    return this.prisma.orderTableProduct.findMany(args);
  }

  delete(args) {
    return this.prisma.orderTableProduct.delete(args);
  }

  async isProductPaid(productId: string): Promise<boolean> {
    const res = await this.prisma.orderTableProduct.findFirst({
      where: {
        id: productId,
      },
      select: {
        productPrice: true,
        payments: {
          select: {
            totalPaid: true,
          },
        },
      },
    });

    return (
      res.payments.reduce((sum, current) => sum + current.totalPaid, 0) >=
      res.productPrice
    );
  }

  async getOrderTableProductTableIds(orderTableProductIds: string[]) {
    return this.prisma.orderTableProduct.findMany({
      where: {
        id: { in: orderTableProductIds },
        paid: false,
      },
      select: {
        tableId: true,
      },
    });
  }

  async getOrderTableProductsById(orderTableProductIds: string[]) {
    return this.prisma.orderTableProduct.findMany({
      where: { id: { in: orderTableProductIds } },
    });
  }

  async moveOrderTableProducts(
    orderTableProductIds: string[],
    newTableId: string,
  ) {
    return this.prisma.orderTableProduct.updateMany({
      where: { id: { in: orderTableProductIds } },
      data: {
        tableId: newTableId,
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
        paid: false,
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
          createdByEmployeeId: RoleGuard.currentUserId,
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
  }

  async recalculateTableState(tableId: string) {
    const tableOrderedProducts = await this.getActiveOrderTableProducts({
      tableId,
    });

    const newTableStateId =
      tableOrderedProducts.length === 0
        ? TableState.Available
        : TableState.Ordered;

    await this.prisma.table.update({
      where: {
        id: tableId,
      },
      data: {
        tableStateId: newTableStateId,
      },
    });
  }

  async getActiveOrderTableProducts(search: OrderTableProductFilterDTO) {
    return this.prisma.orderTableProduct.findMany({
      where: {
        paid: false,
        ...(search.tableId && {
          tableId: search.tableId,
        }),
        deleted: null,
      },
      include: {
        product: {
          include: {
            category: {
              include: {
                type: true,
              },
            },
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
