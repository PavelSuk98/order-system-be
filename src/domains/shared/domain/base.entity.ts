import { CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

export abstract class BaseEntity {
  @Column({ nullable: true })
  createdBy!: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdDate!: Date;

  @Column({ nullable: true })
  updatedBy!: string;

  @UpdateDateColumn({ type: 'timestamp with time zone', nullable: true })
  updatedDate!: Date;
}
