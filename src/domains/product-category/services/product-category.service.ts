import { BadRequestException, Injectable } from '@nestjs/common';
import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { PrismaService } from 'src/prisma.service';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(private prisma: PrismaService) {}

  // findAll(): Promise<ProductCategoryEntity[]> {
  //   return this.productCategoryRepository.find({
  //     where: {
  //       isActive: true,
  //     },
  //     relations: ['type', 'logs', 'logs.type', 'logs.createdBy'],
  //   });
  // }

  // async findOne(id: string): Promise<ProductCategoryEntity | undefined> {
  //   const entity = await this.productCategoryRepository.findOne({
  //     where: {
  //       id,
  //       isActive: true,
  //     },
  //     relations: ['type', 'logs', 'logs.type', 'logs.createdBy'],
  //   });

  //   if (!entity) {
  //     throw new BadRequestException(`Entity with id: ${id} does not exists.`);
  //   }

  //   return entity;
  // }

  // create(category: CreateProductCategoryDTO): Promise<ProductCategoryEntity> {
  //   return this.productCategoryRepository.save({
  //     order: category.order,
  //     title: category.title,
  //     type: { id: category.typeId } as any,
  //   });
  // }

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
