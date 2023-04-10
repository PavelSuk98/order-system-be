import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductCategoryTypeService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.productCategoryType.findMany({
      where: {
        isActive: true,
      },
    });
  }
}
