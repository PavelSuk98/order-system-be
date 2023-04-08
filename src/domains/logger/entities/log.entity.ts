import { UserEntity } from 'src/domains/identity/domain/user.entity';
import { ProductCategoryEntity } from 'src/domains/product-category/entities/product-category.entity';
import { TableBaseEntity } from 'src/domains/shared/domain/base.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LogTypeEntity } from './log-type.entity';

@Entity()
export class LogEntity extends TableBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => LogTypeEntity, (logType) => logType.logs)
  type: LogTypeEntity;

  @ManyToOne(() => UserEntity, (user) => user.logs)
  createdBy: UserEntity;

  @ManyToOne(
    () => ProductCategoryEntity,
    (productCategory) => productCategory.logs,
    {
      nullable: true,
    },
  )
  productCategory?: ProductCategoryEntity;
}
