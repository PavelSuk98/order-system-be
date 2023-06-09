import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductCategory } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany({
      where: {
        deleted: null,
      },
      include: {
        type: true,
      },
      orderBy: [
        {
          type: {
            name: 'asc',
          },
        },
        {
          order: 'asc',
        },
      ],
    });
  }

  async findOne(id: string) {
    const entity = await this.prisma.productCategory.findFirst({
      where: {
        id,
      },
      include: {
        type: true,
      },
    });

    if (!entity) {
      throw new BadRequestException(`Entity with id: ${id} does not exists.`);
    }

    return entity;
  }

  create(category: CreateProductCategoryDTO): Promise<ProductCategory> {
    return this.prisma.productCategory.create({
      data: {
        ...category,
      },
    });
  }

  async update(category: UpdateProductCategoryDTO): Promise<void> {
    await this.prisma.productCategory.update({
      where: {
        id: category.id,
      },
      data: {
        ...category,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.productCategory.delete({
      where: {
        id,
      },
    });
  }
}
