import { Product } from '../entities/product.entity';

export type CreateProductDto = Pick<
  Product,
  | 'order'
  | 'title'
  | 'price'
  | 'state'
  | 'type'
  | 'description'
  | 'imageUrl'
  | 'categoryId'
>;
