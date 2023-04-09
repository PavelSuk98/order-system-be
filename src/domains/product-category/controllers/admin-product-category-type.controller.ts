import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ProductCategoryTypeDTO } from '../models/product-category-type.dto';
import { ProductCategoryFacade } from '../services/product-category.facade';

@ApiTags('Admin Product Category Type')
@Controller('v1/admin/ProductCategoryType')
export class AdminProductCategoryTypeController {
  constructor(private readonly productCategoryFacade: ProductCategoryFacade) {}

  // @Get('')
  // @Roles(UserRoleEnum.Admin)
  // @UseGuards(RoleGuard)
  // findAll(): Promise<ProductCategoryTypeDTO[]> {
  //   return this.productCategoryFacade.findAllTypeDTO();
  // }
}
