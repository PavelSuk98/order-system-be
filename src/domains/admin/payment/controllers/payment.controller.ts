import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/admin/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/admin/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { PaymentTypeDTO } from '../models/payment-type.dto';
import { PaymentFacade } from '../payment.facade';

@UseGuards(RoleGuard)
@Controller('v1/Admin/PaymentType')
@ApiTags('Admin Payment Type')
export class AdminPaymentController {
  constructor(private readonly paymentFacade: PaymentFacade) {}

  @Get()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: PaymentTypeDTO, isArray: true })
  findAll(): Promise<PaymentTypeDTO[]> {
    return this.paymentFacade.findAllPaymentTypes();
  }
}
