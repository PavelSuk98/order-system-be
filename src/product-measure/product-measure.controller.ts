import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductMeasureService } from './product-measure.service';
import { CreateProductMeasureDto } from './dto/create-product-measure.dto';
import { UpdateProductMeasureDto } from './dto/update-product-measure.dto';

@Controller('product-measure')
export class ProductMeasureController {
  constructor(private readonly productMeasureService: ProductMeasureService) {}

  @Post()
  create(@Body() createProductMeasureDto: CreateProductMeasureDto) {
    return this.productMeasureService.create(createProductMeasureDto);
  }

  @Get()
  findAll() {
    return this.productMeasureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productMeasureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductMeasureDto: UpdateProductMeasureDto) {
    return this.productMeasureService.update(+id, updateProductMeasureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productMeasureService.remove(+id);
  }
}
