import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogEntity } from '../entities/log.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity)
    private logRepository: Repository<LogEntity>,
  ) {}

  // findAll(): Promise<ProductCategoryEntity[]> {
  //   return this.productCategoryRepository.find({
  //     where: {
  //       isActive: true,
  //     },
  //   });
  // }
}
