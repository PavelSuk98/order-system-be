import { Injectable } from '@nestjs/common';
import { ListItemModel } from '../shared/domain/list-item.interface';
import { TableStateDTO } from './models/table-state.dto';
import { TableAreaService } from './services/table-area.service';
import { TableStateService } from './services/table-state.service';
import { TableService } from './services/table.service';

@Injectable()
export class TableFacade {
  constructor(
    private readonly tableService: TableService,
    private readonly tableStateService: TableStateService,
    private readonly tableAreaService: TableAreaService,
  ) {}

  async findAllTableStates(): Promise<TableStateDTO[]> {
    return (await this.tableStateService.findAll()).map(
      (c) => new TableStateDTO(c),
    );
  }

  // async findAllDTO(): Promise<ListItemModel<ProductDTO>> {
  //   const products = await this.productService.findAll();

  //   return {
  //     list: products.map((c) => new ProductDTO(c)),
  //   };
  // }

  // async findOneDTO(id: string): Promise<ProductDTO | undefined> {
  //   const product = await this.productService.findOne(id);
  //   if (!product) {
  //     return undefined;
  //   }
  //   return new ProductDTO(product);
  // }
  // async create(createProduct: CreateProductDTO): Promise<ProductDTO> {
  //   const product = await this.productService.create(createProduct);

  //   return this.findOneDTO(product.id);
  // }

  // async update(updateProduct: UpdateProductDTO): Promise<ProductDTO> {
  //   await this.productService.update(updateProduct);

  //   return this.findOneDTO(updateProduct.id);
  // }

  // async delete(id: string): Promise<void> {
  //   await this.productService.delete(id);
  // }
}
