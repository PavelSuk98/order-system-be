import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Put, UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateTableAreaDTO } from '../models/create-table-area.dto';
import { TableAreaDetailDTO } from '../models/table-area-detail.dto';
import { TableAreaDTO } from '../models/table-area.dto';
import { UpdateTableAreaDTO } from '../models/update-table-area.dto';
import { TableFacade } from '../table.facade';

@UseGuards(RoleGuard)
@Controller('v1/Admin/TableArea')
@ApiTags('Admin Table Area')
export class TableAreaController {
  constructor(private readonly tableFacade: TableFacade) {}

  @Post()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: TableAreaDetailDTO })
  async create(
    @Body() createTableAreaDTO: CreateTableAreaDTO,
  ): Promise<TableAreaDetailDTO> {
    return await this.tableFacade.createTableArea(createTableAreaDTO);
  }

  @Get()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: ListItemModel<TableAreaDTO> })
  async findAll(): Promise<ListItemModel<TableAreaDTO>> {
    return await this.tableFacade.findAllTableAreaDTO();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: TableAreaDetailDTO })
  async findOne(@Param('id') id: string): Promise<TableAreaDetailDTO> {
    return await this.tableFacade.findOneTableAreaDTO(id);
  }

  @Put(':id')
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: TableAreaDetailDTO })
  async update(
    @Body() updateTableAreaDTO: UpdateTableAreaDTO,
  ): Promise<TableAreaDetailDTO> {
    return await this.tableFacade.updateTableArea(updateTableAreaDTO);
  }

  @Delete(':id')
  @Roles(UserRoleEnum.Admin)
  async remove(@Param('id') id: string): Promise<void> {
    await this.tableFacade.deleteTableArea(id);
  }
}
