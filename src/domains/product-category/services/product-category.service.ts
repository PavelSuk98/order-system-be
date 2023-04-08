import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductDto } from 'src/domains/product/domain/dto/update-product.dto';
import { Repository } from 'typeorm';
import { ProductCategoryEntity } from '../entities/product-category.entity';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';

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

  findOne(id: string): Promise<ProductCategoryEntity | undefined> {
    return this.productCategoryRepository.findOne({
      where: {
        id,
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

  async update(category: UpdateProductCategoryDTO): Promise<void> {
    let categoryInDB = await this.findOne(category.id);

    if (!categoryInDB) {
      return;
    }

    categoryInDB = { ...categoryInDB, ...category };

    this.productCategoryRepository.save(categoryInDB);
  }

  async delete(id: string): Promise<void> {
    const productCategory = await this.findOne(id);

    if (!productCategory) {
      return;
    }

    productCategory.isActive = false;

    this.productCategoryRepository.save(productCategory);
  }
}
