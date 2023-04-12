import { Product } from '@prisma/client';

export class ProductDTO implements Product {
  createdDate: Date;
  deleted: Date;
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  order: number;
  price: number;
  categoryId: string;
  productStateId: string;

  constructor(data: Partial<ProductDTO>) {
    console.log(data);
  }
}
