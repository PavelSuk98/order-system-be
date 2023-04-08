import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategoryTypeEntity } from '../entities/product-category-type.entity';

@Injectable()
export class ProductCategoryTypeService {
  constructor(
    @InjectRepository(ProductCategoryTypeEntity)
    private productCategoryTypeRepository: Repository<ProductCategoryTypeEntity>,
  ) {}

  findAll(): Promise<ProductCategoryTypeEntity[]> {
    return this.productCategoryTypeRepository.find({
      where: {
        isActive: true,
      },
    });
  }
}
