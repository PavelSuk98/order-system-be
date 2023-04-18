import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
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
import { OrderTableProductFilterDTO } from '../models/order-table-product-filter.dto';
import { ServiceOrderTableProductDTO } from '../models/service-order-table-product.dto';
import { ServiceOrderFacade } from '../service-order.facade';

@UseGuards(RoleGuard)
@Controller('v1/Service/OrderTableProduct')
@ApiTags('Service Order Table Product')
export class ServiceOrderTableProductController {
  constructor(private readonly serviceOrderFacade: ServiceOrderFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  @ApiResponse({ type: ServiceOrderTableProductDTO, isArray: true })
  async create(
    @Body() order: CreateOrderTableProductDTO[],
  ): Promise<ServiceOrderTableProductDTO[]> {
    return await this.serviceOrderFacade.createOrderTableProduct(order);
  }

  @Delete('/:id')
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  async delete(@Param('id') id: string): Promise<void> {
    await this.serviceOrderFacade.deleteOrderTableProduct(id);
  }

  @Post('search')
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  @ApiResponse({ type: ServiceOrderTableProductDTO, isArray: true })
  async getActiveOrders(
    @Body() search: OrderTableProductFilterDTO,
  ): Promise<ServiceOrderTableProductDTO[]> {
    return await this.serviceOrderFacade.getActiveOrderTableProducts(search);
  }

  @Patch('MarkAsPrepared/:id')
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  async markProductAsPrepared(@Param('id') id: string): Promise<void> {
    return await this.serviceOrderFacade.markAsPrepared(id);
  }
}
