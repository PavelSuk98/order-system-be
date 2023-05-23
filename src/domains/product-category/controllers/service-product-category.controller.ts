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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
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
@ApiTags('Service Product Category')
@Controller('v1/Service/ProductCategory')
export class ServiceProductCategoryController {
  constructor(private readonly productCategoryFacade: ProductCategoryFacade) {}

  @Get()
  @Roles(UserRoleEnum.Service)
  @ApiResponse({ type: ListItemModel<ProductCategoryDTO> })
  async findAll(): Promise<ListItemModel<ProductCategoryDTO>> {
    return await this.productCategoryFacade.findAllDTO();
  }
}
