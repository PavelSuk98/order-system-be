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
import { ProductFacade } from '../product.facade';

@UseGuards(RoleGuard)
@Roles(UserRoleEnum.Admin)
@Controller('v1/Admin/ProductState')
@ApiTags('ProductState')
export class ProductStateController {
  constructor(private readonly productFacade: ProductFacade) {}

  @Get()
  findAll() {
    return this.productFacade.findAllProductStates();
  }
}
