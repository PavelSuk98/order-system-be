import { ProductCategoryEntity } from 'src/domains/product-category/entities/product-category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LogTypeEntity } from './log-type.entity';

@Entity()
export class LogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => LogTypeEntity)
  type: LogTypeEntity;

  @ManyToOne(
    () => ProductCategoryEntity,
    (productCategory) => productCategory.logs,
    {
      nullable: true,
    },
  )
  productCategory?: ProductCategoryEntity;
}
