import { Injectable } from '@nestjs/common';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateProductDTO } from './models/create-product.dto';
import { ProductStateDTO } from './models/product-state.dto';
import { ProductDTO } from './models/product.dto';
import { UpdateProductDTO } from './models/update-product.dto';
import { ProductStateService } from './services/product-state.service';
import { ProductService } from './services/product.service';

@Injectable()
export class ProductFacade {
  constructor(
    private readonly productStateService: ProductStateService,
    private readonly productService: ProductService,
  ) {}

  async findAllProductStates(): Promise<ProductStateDTO[]> {
    return (await this.productStateService.findAll()).map(
      (c) => new ProductStateDTO(c),
    );
  }

  async findAllDTO(): Promise<ListItemModel<ProductDTO>> {
    const products = await this.productService.findAll();

    return {
      list: products.map((c) => new ProductDTO(c)),
    };
  }

  async findOneDTO(id: string): Promise<ProductDTO | undefined> {
    const product = await this.productService.findOne(id);
    if (!product) {
      return undefined;
    }
    return new ProductDTO(product);
  }
  async create(createProduct: CreateProductDTO): Promise<ProductDTO> {
    const product = await this.productService.create(createProduct);

    return this.findOneDTO(product.id);
  }

  async update(updateProduct: UpdateProductDTO): Promise<ProductDTO> {
    await this.productService.update(updateProduct);

    return this.findOneDTO(updateProduct.id);
  }

  async delete(id: string): Promise<void> {
    await this.productService.delete(id);
  }
}
