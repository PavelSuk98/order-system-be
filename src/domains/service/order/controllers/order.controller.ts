import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { OrderFacade } from '../order.facade';

@UseGuards(RoleGuard)
@Controller('v1/Service/Order')
@ApiTags('Service Order')
export class ServiceOrderController {
  constructor(private readonly orderService: OrderFacade) {}
}
