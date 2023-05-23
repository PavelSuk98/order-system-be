import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { ProductDTO } from '../models/product.dto';
import { ProductFacade } from '../product.facade';
@UseGuards(RoleGuard)
@Controller('v1/Service/Product')
@ApiTags('Service Product')
export class ServiceProductController {
  constructor(private readonly productFacade: ProductFacade) {}

  @Get()
  @Roles(UserRoleEnum.Service)
  @ApiResponse({ type: ListItemModel<ProductDTO> })
  async findAll(): Promise<ListItemModel<ProductDTO>> {
    return await this.productFacade.findAllDTO();
  }
}
