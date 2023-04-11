import { Injectable } from '@nestjs/common';
import { Log } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLogModel } from '../models/create-log.model';
import { SearchLogModel } from '../models/search-log.model';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  async create(log: CreateLogModel): Promise<void> {
    await this.prisma.log.create({
      data: {
        entityObject: log.entityObject,
        entityId: log.entityId,
        createdById: log.createdByUserId,
        typeId: log.logType,
      },
    });
  }

  findAll(filter: SearchLogModel): Promise<Log[]> {
    return this.prisma.log.findMany({
      where: {
        ...(filter.createdByUserId && {
          createdById: filter.createdByUserId,
        }),
        ...(filter.logType && {
          typeId: filter.logType,
        }),
        ...(filter.productCategoryId && {
          productCategoryId: filter.productCategoryId,
        }),
      },
      include: {
        createdBy: true,
        type: true,
      },
    });
  }
}
