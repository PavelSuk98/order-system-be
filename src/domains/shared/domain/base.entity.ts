import { UserEntity } from 'src/domains/identity/domain/user.entity';
import { CreateDateColumn, Column } from 'typeorm';

export abstract class TableBaseEntity {
  // @Column({ nullable: true })
  // createdBy!: UserEntity;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdDate!: Date;

  @Column({ default: true })
  isActive: boolean;
}
