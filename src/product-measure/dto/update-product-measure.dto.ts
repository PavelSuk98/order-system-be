import { PartialType } from '@nestjs/swagger';
import { CreateProductMeasureDto } from './create-product-measure.dto';

export class UpdateProductMeasureDto extends PartialType(CreateProductMeasureDto) {}
