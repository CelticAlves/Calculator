export interface ICalculator {
  value?: number;
  displayValue: string;
  operator?: string;
  cachedOperator: boolean;
  clearAll: boolean;
}

export interface IState {
  state: string;
}
