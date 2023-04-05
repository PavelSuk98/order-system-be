import { Injectable } from '@nestjs/common';
import { CreateProductMeasureDto } from './dto/create-product-measure.dto';
import { UpdateProductMeasureDto } from './dto/update-product-measure.dto';

@Injectable()
export class ProductMeasureService {
  create(createProductMeasureDto: CreateProductMeasureDto) {
    return 'This action adds a new productMeasure';
  }

  findAll() {
    return `This action returns all productMeasure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productMeasure`;
  }

  update(id: number, updateProductMeasureDto: UpdateProductMeasureDto) {
    return `This action updates a #${id} productMeasure`;
  }

  remove(id: number) {
    return `This action removes a #${id} productMeasure`;
  }
}
