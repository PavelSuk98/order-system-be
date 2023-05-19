import { BadRequestException, Injectable } from '@nestjs/common';
import { Product, Table } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTableDTO } from '../models/create-table.dto';
import { UpdateTableDTO } from '../models/update-table.dto';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany({
      include: {
        tableArea: true,
        tableState: true,
      },
    });
  }

  async findOne(id: string) {
    const entity = await this.prisma.table.findFirst({
      where: {
        id,
      },
      include: {
        tableArea: true,
        tableState: true,
      },
    });

    if (!entity) {
      throw new BadRequestException(`Entity with id: ${id} does not exists.`);
    }

    return entity;
  }

  create(table: CreateTableDTO) {
    return this.prisma.table.create({
      data: {
        ...table,
      },
    });
  }

  async update(table: UpdateTableDTO) {
    await this.prisma.table.update({
      where: {
        id: table.id,
      },
      data: {
        ...table,
      },
    });
  }

  async delete(id: string) {
    await this.prisma.table.delete({
      where: {
        id,
      },
    });
  }
}
