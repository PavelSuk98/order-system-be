import { TableBaseEntity } from 'src/domains/shared/domain/base.entity';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('Role')
export class RoleEntity extends TableBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ default: false })
  active!: boolean;
}
