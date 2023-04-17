import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { OrderFacade } from '../order.facade';

@UseGuards(RoleGuard)
@Controller('v1/Admin/Order')
@ApiTags('Admin Order')
export class OrderController {
  constructor(private readonly orderService: OrderFacade) {}
}
