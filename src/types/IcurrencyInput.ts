export interface IcurrencyInput {
  amount: number;
  currencies: string[];
  currency: string;
  onAmountChange: (val: number) => void;
  onCurrencyChange: (val: string) => void;
}
