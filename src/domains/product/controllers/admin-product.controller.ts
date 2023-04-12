import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Put, UseGuards } from '@nestjs/common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateProductDTO } from '../models/create-product.dto';
import { ProductDetailDTO } from '../models/product-detail.dto';
import { ProductDTO } from '../models/product.dto';
import { UpdateProductDTO } from '../models/update-product.dto';
import { ProductFacade } from '../product.facade';
@UseGuards(RoleGuard)
@Controller('v1/Admin/Product')
@ApiTags('Admin Product')
export class AdminProductController {
  constructor(private readonly productFacade: ProductFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin)
  async create(
    @Body() createProductCategoryDTO: CreateProductDTO,
  ): Promise<ProductDTO> {
    return await this.productFacade.create(createProductCategoryDTO);
  }

  @Get()
  @Roles(UserRoleEnum.Admin)
  async findAll(): Promise<ListItemModel<ProductDTO>> {
    return await this.productFacade.findAllDTO();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin)
  async findOne(@Param('id') id: string): Promise<ProductDetailDTO> {
    return await this.productFacade.findOneDTO(id);
  }

  @Put(':id')
  @Roles(UserRoleEnum.Admin)
  async update(
    @Body() updateProductCategoryDto: UpdateProductDTO,
  ): Promise<ProductDTO> {
    return await this.productFacade.update(updateProductCategoryDto);
  }

  @Delete(':id')
  @Roles(UserRoleEnum.Admin)
  async remove(@Param('id') id: string): Promise<void> {
    await this.productFacade.delete(id);
  }
}
