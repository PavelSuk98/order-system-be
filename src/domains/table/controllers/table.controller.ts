import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Put, UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateTableDTO } from '../models/create-table.dto';
import { TableDetailDTO } from '../models/table-detail.dto';
import { TableDTO } from '../models/table.dto';
import { UpdateTableDTO } from '../models/update-table.dto';
import { TableFacade } from '../table.facade';
@UseGuards(RoleGuard)
@Controller('v1/Admin/Table')
@ApiTags('Admin Table')
export class AdminTableController {
  constructor(private readonly tableFacade: TableFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: TableDetailDTO })
  async create(
    @Body() createTableDTO: CreateTableDTO,
  ): Promise<TableDetailDTO> {
    return await this.tableFacade.createTable(createTableDTO);
  }

  @Get()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: ListItemModel<TableDTO> })
  async findAll(): Promise<ListItemModel<TableDTO>> {
    return await this.tableFacade.findAllTableDTO();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: TableDetailDTO })
  async findOne(@Param('id') id: string): Promise<TableDetailDTO> {
    return await this.tableFacade.findOneTableDTO(id);
  }

  @Put(':id')
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: TableDTO })
  async update(@Body() updateDTO: UpdateTableDTO): Promise<TableDetailDTO> {
    return await this.tableFacade.updateTable(updateDTO);
  }

  @Delete(':id')
  @Roles(UserRoleEnum.Admin)
  async remove(@Param('id') id: string): Promise<void> {
    await this.tableFacade.deleteTable(id);
  }
}
