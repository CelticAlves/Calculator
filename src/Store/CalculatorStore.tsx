import { makeAutoObservable } from 'mobx';
import { state } from '../Types/types';

export const operations = (operator: string, prev: number, next: number) => {
  if (operator === '+') return prev + next;
  if (operator === '-') return prev - next;
  if (operator === '×') return prev * next;
  if (operator === '÷') return prev / next;
  if (operator === '=') return next;
  return;
};

export class CalculatorStore implements state {
  value: number = null;
  displayValue = '0';
  operator: string = null;
  cachedOperator = false;
  clearAll = true;

  constructor() {
    makeAutoObservable(this);
  }

  restHistory() {
    this.value = null;
    this.displayValue = '0';
    this.operator = null;
    this.cachedOperator = false;
    this.clearAll = true;
  }

  restDisplay() {
    this.displayValue = '0';
    this.clearAll = true;
  }

  sign() {
    const signConversion = parseFloat(this.displayValue) * -1;
    this.displayValue = String(signConversion);
  }

  percentage() {
    const input = parseFloat(this.displayValue);
    const conversion = this.displayValue.replace(/^-?\d*\.?/, '');
    const inputPercentage = input / 100;

    if (input === 0) return;
    this.displayValue = String(inputPercentage.toFixed(conversion.length + 2));
  }

  displayDigits(number: string) {
    if (this.cachedOperator) {
      this.displayValue = number;
      this.cachedOperator = false;
    } else {
      this.displayValue === '0'
        ? (this.displayValue = number)
        : (this.displayValue = this.displayValue + number);
    }
    // const convertedNumber = number.replace(/(.)(?=(\d{3})+$)/g, '$1,');
    this.clearAll = false;
  }

  displayDigitsDotException() {
    if (this.cachedOperator) {
      this.displayValue = '0.';
      this.cachedOperator = false;
    } else if (!/\./.test(this.displayValue)) {
      this.displayValue = this.displayValue + '.';
      this.cachedOperator = false;
    }
    this.clearAll = false;
  }

  cumputeOperation(operator: string) {
    const input = parseFloat(this.displayValue);

    if (this.value === null) {
      this.value = input;
    } else if (this.operator) {
      const currentValue = this.value || 0;
      const operatedNumber = operations(this.operator, currentValue, input);
      this.value = operatedNumber;
      this.displayValue = String(operatedNumber);
    }
    this.cachedOperator = true;
    this.operator = operator;
    this.clearAll = false;
  }
}
