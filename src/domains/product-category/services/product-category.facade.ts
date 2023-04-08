import { Injectable } from '@nestjs/common';
import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { LogFacade } from 'src/domains/logger/services/log.facade';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { ProductCategoryDTO } from '../models/product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';
import { ProductCategoryService } from './product-category.service';

@Injectable()
export class ProductCategoryFacade {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
    private readonly logFacade: LogFacade,
  ) {
    // this.logFacade.create({
    //   createdByUserId: 'beedecfd-64bb-4c1c-9e8c-76dbdba640b5',
    //   logType: LogTypeEnum.Create,
    //   productCategoryId: '',
    // });
  }

  async findAllDTO(): Promise<ListItemModel<ProductCategoryDTO>> {
    const productCategories = await this.productCategoryService.findAll();

    return {
      list: productCategories.map((c) => new ProductCategoryDTO(c)),
    };
  }

  async findOneDTO(id: string): Promise<ProductCategoryDTO | undefined> {
    const productCategory = await this.productCategoryService.findOne(id);

    if (!productCategory) {
      return undefined;
    }

    return new ProductCategoryDTO(productCategory);
  }

  async create(
    category: CreateProductCategoryDTO,
  ): Promise<ProductCategoryDTO> {
    const productCategory = await this.productCategoryService.create(category);

    return new ProductCategoryDTO(productCategory);
  }

  async update(productCategory: UpdateProductCategoryDTO): Promise<void> {
    await this.productCategoryService.update(productCategory);
  }

  async delete(id: string): Promise<void> {
    await this.productCategoryService.delete(id);
  }
}
