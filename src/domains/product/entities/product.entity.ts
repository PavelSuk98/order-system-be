import { ProductCategoryEntity } from 'src/domains/product-category/entities/product-category.entity';
import { TableBaseEntity } from 'src/domains/shared/domain/base.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductEntity extends TableBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imgUrl: string;

  @Column()
  order: number;

  @Column()
  price: number;

  @ManyToOne(
    () => ProductCategoryEntity,
    (productCategory) => productCategory.products,
  )
  category: ProductCategoryEntity;
}
