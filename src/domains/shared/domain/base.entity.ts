import { CreateDateColumn, Column } from 'typeorm';

export abstract class TableBaseEntity {
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdDate!: Date;

  @Column({ default: true })
  isActive: boolean;
}
