import { Injectable } from '@nestjs/common';
import { Log, Prisma } from '@prisma/client';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';
import { CreateLogModel } from '../models/create-log.model';
import { LogFilterDTO } from '../models/log-filter.dto';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  async create(log: CreateLogModel): Promise<void> {
    await this.prisma.log.create({
      data: {
        ...log,
      },
    });
  }

  findAll(filter: LogFilterDTO): Promise<Log[]> {
    return this.prisma.log.findMany({
      where: {
        ...(filter.createdByUserId && {
          createdByUserId: filter.createdByUserId,
        }),
        ...(filter.logType && {
          logType: filter.logType,
        }),
        ...(filter.entityId && {
          entityId: filter.entityId,
        }),
      },
    });
  }
}
