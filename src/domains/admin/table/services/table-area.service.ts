import { BadRequestException, Injectable } from '@nestjs/common';
import { TableArea } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTableAreaDTO } from '../models/create-table-area.dto';
import { UpdateTableAreaDTO } from '../models/update-table-area.dto';

@Injectable()
export class TableAreaService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.tableArea.findMany();
  }

  async findOne(id: string) {
    const entity = await this.prisma.tableArea.findFirst({
      where: {
        id,
      },
    });

    if (!entity) {
      throw new BadRequestException(`Entity with id: ${id} does not exists.`);
    }

    return entity;
  }

  create(createDTO: CreateTableAreaDTO): Promise<TableArea> {
    return this.prisma.tableArea.create({
      data: {
        ...createDTO,
      },
    });
  }

  async update(updateDTO: UpdateTableAreaDTO): Promise<void> {
    await this.prisma.tableArea.update({
      where: {
        id: updateDTO.id,
      },
      data: {
        ...updateDTO,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.tableArea.delete({
      where: {
        id,
      },
    });
  }
}
