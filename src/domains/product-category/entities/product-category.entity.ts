import { LogEntity } from 'src/domains/logger/entities/log.entity';
import { TableBaseEntity } from 'src/domains/shared/domain/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategoryEntity extends TableBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @OneToMany(() => LogEntity, (log) => log.productCategory)
  logs: LogEntity[];
}
