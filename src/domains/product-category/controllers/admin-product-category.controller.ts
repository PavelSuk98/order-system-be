import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { DeleteResponseModel } from 'src/domains/shared/models/delete-response.model';
import { CreateProductCategoryDTO } from '../models/create-product-category.dto';
import { ProductCategoryDetailDTO } from '../models/product-category-detail.dto';
import { ProductCategoryDTO } from '../models/product-category.dto';
import { UpdateProductCategoryDTO } from '../models/update-product-category.dto';
import { ProductCategoryFacade } from '../product-category.facade';

@UseGuards(RoleGuard)
@ApiTags('Admin Product Category')
@Controller('v1/admin/ProductCategory')
export class AdminProductCategoryController {
  constructor(private readonly productCategoryFacade: ProductCategoryFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin)
  async create(
    @Body() createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategoryDTO> {
    return await this.productCategoryFacade.create(createProductCategoryDTO);
  }

  @Get()
  @Roles(UserRoleEnum.Admin)
  async findAll(): Promise<ListItemModel<ProductCategoryDTO>> {
    return await this.productCategoryFacade.findAllDTO();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin)
  async findOne(@Param('id') id: string): Promise<ProductCategoryDetailDTO> {
    return await this.productCategoryFacade.findOneDTO(id);
  }

  @Put(':id')
  @Roles(UserRoleEnum.Admin)
  async update(
    @Body() updateProductCategoryDto: UpdateProductCategoryDTO,
  ): Promise<ProductCategoryDTO> {
    return await this.productCategoryFacade.update(updateProductCategoryDto);
  }

  @Delete(':id')
  @Roles(UserRoleEnum.Admin)
  async remove(@Param('id') id: string): Promise<void> {
    await this.productCategoryFacade.delete(id);
  }
}
