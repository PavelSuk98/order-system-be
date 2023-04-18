import { Controller } from '@nestjs/common';
import {
  Body,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/admin/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/admin/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';
import { CreateOrderDTO } from '../models/create-order.dto';
import { OrderTableProductFilterDTO } from '../models/order-table-product-filter.dto';
import { ServiceOrderTableProductDTO } from '../models/service-order-table-product.dto';
import { ServiceOrderFacade } from '../service-order.facade';

@UseGuards(RoleGuard)
@Controller('v1/Service/Order')
@ApiTags('Service Order')
export class ServiceOrderController {
  constructor(private readonly serviceOrderFacade: ServiceOrderFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  async create(@Body() order: CreateOrderDTO): Promise<void> {
    await this.serviceOrderFacade.createOrder(order);
  }
}
