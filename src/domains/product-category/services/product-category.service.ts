import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategoryEntity } from '../entities/product-category-entity';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategoryEntity)
    private productCategoryRepository: Repository<ProductCategoryEntity>,
  ) {}

  findAll(): Promise<ProductCategoryEntity[]> {
    return this.productCategoryRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  findOne(): Promise<ProductCategoryEntity | undefined> {
    return this.productCategoryRepository.findOne({
      where: {
        isActive: true,
      },
    });
  }

  create(category: CreateProductCategoryDTO): Promise<ProductCategoryEntity> {
    return this.productCategoryRepository.save({
      order: category.order,
      title: category.title,
    });
  }
}
