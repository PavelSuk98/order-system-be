import { Injectable } from '@nestjs/common';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { LogFacade } from '../logger/log.facade';
import { CreateProductCategoryDTO } from './models/create-product-category.dto';
import { ProductCategoryDetailDTO } from './models/product-category-detail.dto';
import { ProductCategoryTypeDTO } from './models/product-category-type.dto';
import { ProductCategoryDTO } from './models/product-category.dto';
import { UpdateProductCategoryDTO } from './models/update-product-category.dto';
import { ProductCategoryTypeService } from './services/product-category-type.service';
import { ProductCategoryService } from './services/product-category.service';

@Injectable()
export class ProductCategoryFacade {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
    private readonly productCategoryTypeService: ProductCategoryTypeService,
    private readonly logFacade: LogFacade,
  ) {}

  async findAllPoductCategoryTypeDTOs(): Promise<ProductCategoryTypeDTO[]> {
    const types = await this.productCategoryTypeService.findAll();

    return types.map((c) => new ProductCategoryTypeDTO(c));
  }

  async findAllDTO(): Promise<ListItemModel<ProductCategoryDTO>> {
    const productCategories = await this.productCategoryService.findAll();

    return {
      list: productCategories.map((c) => new ProductCategoryDTO(c)),
    };
  }

  async findOneDTO(id: string): Promise<ProductCategoryDetailDTO | undefined> {
    const productCategory = await this.productCategoryService.findOne(id);
    if (!productCategory) {
      return undefined;
    }
    return new ProductCategoryDetailDTO(productCategory);
  }
  async create(
    category: CreateProductCategoryDTO,
  ): Promise<ProductCategoryDetailDTO> {
    const productCategory = await this.productCategoryService.create(category);

    return this.findOneDTO(productCategory.id);
  }

  async update(
    productCategory: UpdateProductCategoryDTO,
  ): Promise<ProductCategoryDetailDTO> {
    await this.productCategoryService.update(productCategory);

    return this.findOneDTO(productCategory.id);
  }

  async delete(id: string): Promise<void> {
    await this.productCategoryService.delete(id);
  }
}
