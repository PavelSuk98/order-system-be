import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TableAreaService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.tableArea.findMany();
  }
}
