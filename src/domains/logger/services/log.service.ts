import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogEntity } from '../entities/log.entity';
import { CreateLogModel } from '../models/create-log.model';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity)
    private logRepository: Repository<LogEntity>,
  ) {}

  // TODO: PAVEL: add relation by id without fetching whole object
  async create(log: CreateLogModel): Promise<void> {
    const logEntity: Partial<LogEntity> = {
      type: { id: log.logType } as any,
      createdBy: { id: log.createdByUserId } as any,
      productCategory: log.productCategoryId
        ? ({ id: log.productCategoryId } as any)
        : undefined,
    };

    await this.logRepository.save(logEntity);
  }

  findAll(): Promise<LogEntity[]> {
    return this.logRepository.find({
      relations: ['createdBy', 'type', 'productCategory'],
    });
  }
}
