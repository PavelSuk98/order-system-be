import { BaseEntity } from 'src/domains/shared/domain/base.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity('User')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  userName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @ManyToOne(() => RoleEntity)
  @JoinColumn()
  role!: RoleEntity;
}
