import { CreateProductDto } from './create-product.dto';
import { Product } from '../entities/product.entity';

export type UpdateProductDto = Partial<CreateProductDto> & Pick<Product, 'id'>;
