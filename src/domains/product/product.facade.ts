import { Injectable } from '@nestjs/common';
import { ProductStateDTO } from './models/product-state.dto';
import { ProductStateService } from './services/product-state.service';

@Injectable()
export class ProductFacade {
  constructor(private readonly productStateService: ProductStateService) {}

  async findAllProductStates(): Promise<ProductStateDTO[]> {
    return (await this.productStateService.findAll()).map(
      (c) => new ProductStateDTO(c),
    );
  }
}
