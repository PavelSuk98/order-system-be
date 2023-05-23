export class IncomeDTO {
  cardIncome: number;
  cashIncome: number;

  constructor(cardIncome: number, cashIncome: number) {
    this.cardIncome = cardIncome;
    this.cashIncome = cashIncome;
  }
}
