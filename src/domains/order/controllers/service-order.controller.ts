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
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ServiceOrderFacade } from '../facades/service-order.facade';
import { CreateOrderDTO } from '../models/services/create-order.dto';

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
