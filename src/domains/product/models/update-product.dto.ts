import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDTO } from './create-product.dto';

export class UpdateProductDTO extends CreateProductDTO {
  @ApiProperty()
  id: string;
}
