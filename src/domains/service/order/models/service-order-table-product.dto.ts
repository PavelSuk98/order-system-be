import { ApiProperty } from '@nestjs/swagger';
import { OrderTableProduct } from '@prisma/client';
import { ItemDTO } from 'src/domains/shared/models/item.dto';

export class ServiceOrderTableProductDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  productPrice: number;
  @ApiProperty()
  productOrderDate: Date;
  @ApiProperty()
  productPreparedDate?: Date;

  @ApiProperty()
  product: ItemDTO;
  @ApiProperty()
  productCategory: ItemDTO;

  @ApiProperty()
  table: ItemDTO;
  @ApiProperty()
  tableArea: ItemDTO;

  @ApiProperty()
  customerAdditionalRequirements?: string;

  constructor(data: any) {
    this.id = data.id;
    this.productPrice = data.productPrice;
    this.productOrderDate = data.productOrderDate;
    this.productPreparedDate = data.productPreparedDate;
    this.customerAdditionalRequirements = data.customerAdditionalRequirements;

    if (data.table) {
      this.table = new ItemDTO(data.table.id, data.table.name);

      if (data.table.tableArea) {
        this.tableArea = new ItemDTO(data.table.id, data.table.name);
      }
    }

    if (data.product) {
      this.product = new ItemDTO(data.product.id, data.product.name);

      if (data.product.category) {
        this.productCategory = new ItemDTO(
          data.product.category.id,
          data.product.category.name,
        );
      }
    }
  }
}
