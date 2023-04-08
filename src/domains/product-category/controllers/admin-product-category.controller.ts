import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { ProductCategoryDTO } from '../models/product-category.dto';
import { ProductCategoryFacade } from '../services/product-category.facade';

@ApiTags('Admin Product Category')
@Controller('v1/admin/ProductCategory')
export class AdminProductCategoryController {
  constructor(private readonly productCategoryFacade: ProductCategoryFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin)
  @UseGuards(RoleGuard)
  create(
    @Body() createProductCategoryDto: CreateProductCategoryDTO,
  ): Promise<ProductCategoryDTO> {
    return {} as any;
    // return this.productCategoryFacade.create(createProductCategoryDto);
  }

  @Get()
  @Roles(UserRoleEnum.Admin)
  @UseGuards(RoleGuard)
  findAll() {
    return 'ahoj';
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productCategoryService.findOne(+id);
  // }

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  // ) {
  //   return this.productCategoryService.update(+id, updateProductCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productCategoryService.remove(+id);
  // }
}
