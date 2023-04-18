import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post, UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/admin/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/admin/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';
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
  @ApiResponse({ type: ServiceOrderTableProductDTO, isArray: true })
  async create(
    @Body() order: CreateOrderTableProductDTO[],
  ): Promise<ServiceOrderTableProductDTO[]> {
    return await this.serviceOrderFacade.createOrderTableProduct(order);
  }

  @Post('search')
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  @ApiResponse({ type: ServiceOrderTableProductDTO, isArray: true })
  async getActiveOrders(
    @Body() search: OrderTableProductFilterDTO,
  ): Promise<ServiceOrderTableProductDTO[]> {
    return await this.serviceOrderFacade.getActiveOrderTableProducts(search);
  }
}
