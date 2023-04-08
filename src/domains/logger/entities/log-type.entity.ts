import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LogEntity } from './log.entity';

@Entity()
export class LogTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => LogEntity, (entity) => entity.type)
  logs: LogEntity[];
}
