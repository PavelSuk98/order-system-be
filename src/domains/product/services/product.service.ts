import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDTO } from '../models/create-product.dto';
import { UpdateProductDTO } from '../models/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: {
        category: true,
        productState: true,
      },
    });
  }

  async findOne(id: string) {
    const entity = await this.prisma.product.findFirst({
      where: {
        id,
      },
      include: {
        category: true,
        productState: true,
      },
    });

    if (!entity) {
      throw new BadRequestException(`Entity with id: ${id} does not exists.`);
    }

    return entity;
  }

  create(product: CreateProductDTO): Promise<Product> {
    return this.prisma.product.create({
      data: {
        ...product,
      },
    });
  }

  async update(product: UpdateProductDTO): Promise<void> {
    await this.prisma.product.update({
      where: {
        id: product.id,
      },
      data: {
        ...product,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
