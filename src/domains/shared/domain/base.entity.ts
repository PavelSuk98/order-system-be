import { CreateDateColumn, Column } from 'typeorm';

export abstract class TableBaseEntity {
  @Column({ nullable: true })
  createdBy!: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdDate!: Date;

  @Column({ default: true })
  isActive: boolean;

  // @Column({ nullable: true })
  // updatedBy!: string;

  // @UpdateDateColumn({ type: 'timestamp with time zone', nullable: true })
  // updatedDate!: Date;
}
