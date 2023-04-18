import { Controller, Get } from '@nestjs/common';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/admin/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/admin/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { CreateOrderTableProductDTO } from '../models/create-order-table-product.dto';
import { OrderTableProductDTO } from '../models/order-table-product.dto';
import { ServiceOrderFacade } from '../service-order.facade';

@UseGuards(RoleGuard)
@Controller('v1/Service/Order')
@ApiTags('Service Order')
export class ServiceOrderController {
  constructor(private readonly serviceOrderFacade: ServiceOrderFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  @ApiResponse({ type: OrderTableProductDTO, isArray: true })
  async create(
    @Body() order: CreateOrderTableProductDTO[],
  ): Promise<OrderTableProductDTO[]> {
    return await this.serviceOrderFacade.createOrderTableProduct(order);
  }
}
