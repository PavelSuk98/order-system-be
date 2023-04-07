import { SystemInfo } from 'src/domains/shared/domain/system-info.interface';

export interface Product extends SystemInfo {
  id: string;
  order: number;
  title: string;
  description: string;
  imageUrl: string;
  state: string;
  categoryId: string;
  type: string;
  price: string;
}
