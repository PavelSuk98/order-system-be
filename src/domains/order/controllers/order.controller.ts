import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { OrderFacade } from '../order.facade';

@UseGuards(RoleGuard)
@Controller('v1/Admin/Order')
@ApiTags('Admin Order')
export class OrderController {
  constructor(private readonly orderService: OrderFacade) {}
}
