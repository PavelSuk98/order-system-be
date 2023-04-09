import { Injectable } from '@nestjs/common';
import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { LogFacade } from 'src/domains/logger/services/log.facade';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { ProductCategoryTypeDTO } from '../models/product-category-type.dto';
import { ProductCategoryDTO } from '../models/product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';
import { ProductCategoryTypeService } from './product-category-type.service';
import { ProductCategoryService } from './product-category.service';

@Injectable()
export class ProductCategoryFacade {
  // constructor(
  //   private readonly productCategoryService: ProductCategoryService,
  //   private readonly productCategoryTypeService: ProductCategoryTypeService,
  //   private readonly logFacade: LogFacade,
  // ) {}
  // async findAllTypeDTO(): Promise<ProductCategoryTypeDTO[]> {
  //   const types = await this.productCategoryTypeService.findAll();
  //   return types.map((c) => new ProductCategoryTypeDTO(c));
  // }
  // async findAllDTO(): Promise<ListItemModel<ProductCategoryDTO>> {
  //   const productCategories = await this.productCategoryService.findAll();
  //   return {
  //     list: productCategories.map((c) => new ProductCategoryDTO(c)),
  //   };
  // }
  // async findOneDTO(id: string): Promise<ProductCategoryDTO | undefined> {
  //   const productCategory = await this.productCategoryService.findOne(id);
  //   if (!productCategory) {
  //     return undefined;
  //   }
  //   return new ProductCategoryDTO(productCategory);
  // }
  // async create(
  //   category: CreateProductCategoryDTO,
  // ): Promise<ProductCategoryDTO> {
  //   const productCategory = await this.productCategoryService.create(category);
  //   await this.logFacade.create({
  //     createdByUserId: category.createdByUserId,
  //     logType: LogTypeEnum.Create,
  //     productCategoryId: productCategory.id,
  //   });
  //   return this.findOneDTO(productCategory.id);
  // }
  // async update(productCategory: UpdateProductCategoryDTO): Promise<void> {
  //   await this.productCategoryService.update(productCategory);
  //   await this.logFacade.create({
  //     createdByUserId: productCategory.createdByUserId,
  //     logType: LogTypeEnum.Update,
  //     productCategoryId: productCategory.id,
  //   });
  // }
  // async delete(id: string, requestedByUserId: string): Promise<void> {
  //   await this.productCategoryService.delete(id);
  //   await this.logFacade.create({
  //     createdByUserId: requestedByUserId,
  //     logType: LogTypeEnum.Update,
  //     productCategoryId: id,
  //   });
  // }
}
