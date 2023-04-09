import { LogEntity } from 'src/domains/logger/entities/log.entity';
import { ProductEntity } from 'src/domains/product/entities/product.entity';
import { TableBaseEntity } from 'src/domains/shared/domain/base.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategoryTypeEntity } from './product-category-type.entity';

@Entity()
export class ProductCategoryEntity extends TableBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @ManyToOne(() => ProductCategoryTypeEntity)
  type: ProductCategoryTypeEntity;

  @OneToMany(() => LogEntity, (log) => log.productCategory)
  logs: LogEntity[];

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
