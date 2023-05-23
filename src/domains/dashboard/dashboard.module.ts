import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DashboardController } from './controllers/dashboard.controller';
import { DashboardFacade } from './facades/dashboard.facade';
import { DashboardService } from './services/dashboard.service';

@Module({
  controllers: [DashboardController],
  providers: [PrismaService, DashboardService, DashboardFacade],
})
export class DashboardModule {}
