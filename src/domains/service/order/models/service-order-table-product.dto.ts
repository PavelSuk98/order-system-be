// import { ApiProperty } from '@nestjs/swagger';
// import { OrderTableProduct } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';
import { OrderTableProduct } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { ProductDTO } from 'src/domains/admin/product/models/product.dto';
import { TableDTO } from 'src/domains/admin/table/models/table.dto';

// import { ItemDTO } from 'src/domains/shared/models/item.dto';
export class ServiceOrderTableProductDTO implements OrderTableProduct {
  @ApiProperty()
  id: string;

  @ApiProperty()
  productOrderDate: Date;
  @ApiProperty()
  productPreparedDate: Date;
  @ApiProperty()
  productPrice: number;
  @ApiProperty()
  customerAdditionalRequirements: string;

  @ApiProperty()
  product: Partial<ProductDTO>;

  @ApiProperty()
  table: Partial<TableDTO>;

  @Exclude()
  tableId: string;
  @Exclude()
  productId: string;
  @Exclude()
  orderId: string;
  @Exclude()
  managedByEmployeeId: string;
  @Exclude()
  deleted: Date;

  constructor({
    product,
    table,
    ...data
  }: Partial<ServiceOrderTableProductDTO>) {
    Object.assign(this, data);

    if (product) {
      this.product = new ProductDTO(product);
    }

    if (table) {
      this.table = new TableDTO(table);
    }
  }
}
// export class ServiceOrderTableProductDTO {
//   @ApiProperty()
//   id: string;

//   @ApiProperty()
//   productPrice: number;
//   @ApiProperty()
//   productOrderDate: Date;
//   @ApiProperty()
//   productPreparedDate?: Date;

//   @ApiProperty()
//   product: ItemDTO;
//   @ApiProperty()
//   productCategory: ItemDTO;

//   @ApiProperty()
//   table: ItemDTO;
//   @ApiProperty()
//   tableArea: ItemDTO;

//   @ApiProperty()
//   customerAdditionalRequirements?: string;

//   constructor(data: any) {
//     this.id = data.id;
//     this.productPrice = data.productPrice;
//     this.productOrderDate = data.productOrderDate;
//     this.productPreparedDate = data.productPreparedDate;
//     this.customerAdditionalRequirements = data.customerAdditionalRequirements;

//     if (data.table) {
//       this.table = new ItemDTO(data.table.id, data.table.name);

//       if (data.table.tableArea) {
//         this.tableArea = new ItemDTO(data.table.id, data.table.name);
//       }
//     }

//     if (data.product) {
//       this.product = new ItemDTO(data.product.id, data.product.name);

//       if (data.product.category) {
//         this.productCategory = new ItemDTO(
//           data.product.category.id,
//           data.product.category.name,
//         );
//       }
//     }
//   }
// }
