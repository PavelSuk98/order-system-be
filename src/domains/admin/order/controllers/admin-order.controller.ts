import { Controller } from '@nestjs/common';
import {
  Body,
  Get,
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
import { AdminOrderFacade } from '../admin-order-facade';
import { OrderDetailDTO } from '../models/order-detail.dto';
import { OrderDTO } from '../models/order.dto';

@UseGuards(RoleGuard)
@Controller('v1/Admin/Order')
@ApiTags('Admin Order')
export class AdminOrderController {
  constructor(private readonly orderFacade: AdminOrderFacade) {}

  @Get()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: OrderDTO, isArray: true })
  async findAll(): Promise<OrderDTO[]> {
    return this.orderFacade.getOrders();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: OrderDetailDTO })
  async findOne(@Param('id') id: string): Promise<OrderDetailDTO> {
    return this.orderFacade.getOrder(id);
  }
}
