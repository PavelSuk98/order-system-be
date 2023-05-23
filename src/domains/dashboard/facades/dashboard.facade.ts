import { PaymentTypeEnum } from '@domains/payment/models/payment-type.enum';
import { Injectable } from '@nestjs/common';
import { IncomeDTO } from '../models/income.model';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class DashboardFacade {
  constructor(private readonly dashboardService: DashboardService) {}

  async getDailyIncome(): Promise<IncomeDTO> {
    return new IncomeDTO(
      await this.dashboardService.getDailyIncome(PaymentTypeEnum.Card),
      await this.dashboardService.getDailyIncome(PaymentTypeEnum.Cash),
    );
  }
}
