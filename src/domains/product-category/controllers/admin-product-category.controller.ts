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
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { ProductCategoryDTO } from '../models/product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';
import { ProductCategoryFacade } from '../services/product-category.facade';

@ApiTags('Admin Product Category')
@Controller('v1/admin/ProductCategory')
export class AdminProductCategoryController {
  constructor(private readonly productCategoryFacade: ProductCategoryFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin)
  @UseGuards(RoleGuard)
  create(
    @Body() createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategoryDTO> {
    return this.productCategoryFacade.create(createProductCategoryDTO);
  }

  @Get()
  @Roles(UserRoleEnum.Admin)
  @UseGuards(RoleGuard)
  findAll(): Promise<ListItemModel<ProductCategoryDTO>> {
    return this.productCategoryFacade.findAllDTO();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin)
  @UseGuards(RoleGuard)
  async findOne(@Param('id') id: string): Promise<ProductCategoryDTO> {
    return this.productCategoryFacade.findOneDTO(id);
  }

  @Put('')
  async update(
    @Body() updateProductCategoryDto: UpdateProductCategoryDTO,
  ): Promise<void> {
    await this.productCategoryFacade.update(updateProductCategoryDto);
  }

  @Delete(':id')
  @Roles(UserRoleEnum.Admin)
  @UseGuards(RoleGuard)
  async remove(@Param('id') id: string): Promise<void> {
    await this.productCategoryFacade.delete(id);
  }
}
