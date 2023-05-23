import { ApiProperty } from '@nestjs/swagger';

export class IncomeDTO {
  @ApiProperty()
  cardIncome: number;
  @ApiProperty()
  cashIncome: number;

  constructor(cardIncome: number, cashIncome: number) {
    this.cardIncome = cardIncome;
    this.cashIncome = cashIncome;
  }
}
