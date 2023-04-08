import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('Role')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ default: false })
  isActive!: boolean;
}
