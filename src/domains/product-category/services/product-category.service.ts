import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductCategory } from '@prisma/client';
import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { PrismaService } from 'src/prisma.service';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany({
      where: {
        isActive: true,
      },
      include: {
        logs: true,
      },
    });
  }

  async findOne(id: string): Promise<ProductCategory | undefined> {
    const entity = await this.prisma.productCategory.findFirst({
      where: {
        id,
        isActive: true,
      },
      include: {
        type: true,
        logs: true,
      },
      // relations: ['type', 'logs', 'logs.type', 'logs.createdBy'],
    });

    if (!entity) {
      throw new BadRequestException(`Entity with id: ${id} does not exists.`);
    }

    return entity;
  }

  create(category: CreateProductCategoryDTO): Promise<ProductCategory> {
    return this.prisma.productCategory.create({
      data: {
        order: category.order,
        title: category.title,
        typeId: category.typeId,
      },
    });
  }

  // async update(category: UpdateProductCategoryDTO): Promise<void> {
  //   let categoryInDB = await this.findOne(category.id);

  //   if (!categoryInDB) {
  //     throw new BadRequestException(
  //       `Entity with id: ${category.id} does not exists.`,
  //     );
  //   }

  //   categoryInDB = { ...categoryInDB, ...category };

  //   this.productCategoryRepository.save(categoryInDB);
  // }

  // async delete(id: string): Promise<void> {
  //   const productCategory = await this.findOne(id);

  //   if (!productCategory) {
  //     throw new BadRequestException(`Entity with id: ${id} does not exists.`);
  //   }

  //   productCategory.isActive = false;

  //   this.productCategoryRepository.save(productCategory);
  // }
}
