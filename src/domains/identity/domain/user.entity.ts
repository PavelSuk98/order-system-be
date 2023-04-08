import { LogEntity } from 'src/domains/logger/entities/log.entity';
import { TableBaseEntity } from 'src/domains/shared/domain/base.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity('User')
export class UserEntity extends TableBaseEntity {
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

  @OneToMany(() => LogEntity, (log) => log.createdBy)
  logs: LogEntity[];
}
