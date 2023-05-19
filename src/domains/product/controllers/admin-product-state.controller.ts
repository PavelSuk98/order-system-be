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
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ProductStateDTO } from '../models/product-state.dto';
import { ProductFacade } from '../product.facade';

@UseGuards(RoleGuard)
@Controller('v1/Admin/ProductState')
@ApiTags('Admin Product State')
export class AdminProductStateController {
  constructor(private readonly productFacade: ProductFacade) {}

  @Get()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: ProductStateDTO, isArray: true })
  findAll(): Promise<ProductStateDTO[]> {
    return this.productFacade.findAllProductStates();
  }
}
