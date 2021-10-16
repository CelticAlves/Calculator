import { makeAutoObservable } from 'mobx';
import { state } from './types';

export const operations = (
  operator: string,
  prev: number,
  next: number
): number | null => {
  if (operator === '+') return prev + next;
  if (operator === '-') return prev - next;
  if (operator === '×') return prev * next;
  if (operator === '÷') return prev / next;
  if (operator === '=') return next;
  return null;
};

class Store {
  store: state = {
    value: null,
    displayValue: '0',
    operator: null,
    cachedOperator: false,
    clearAll: true,
  };
  constructor() {
    makeAutoObservable(this);
  }

  restHistory() {
    this.store.value = null;
    this.store.displayValue = '0';
    this.store.operator = null;
    this.store.cachedOperator = false;
    this.store.clearAll = true;
  }

  restDisplay() {
    this.store.displayValue = '0';
    this.store.clearAll = true;
  }

  sign() {
    const signConversion = parseFloat(this.store.displayValue) * -1;
    this.store.displayValue = String(signConversion);
  }

  percentage() {
    const input = parseFloat(this.store.displayValue);
    const conversion = this.store.displayValue.replace(/^-?\d*\.?/, '');
    const inputPercentage = input / 100;

    if (input === 0) return;
    this.store.displayValue = String(
      inputPercentage.toFixed(conversion.length + 2)
    );
  }

  displayDigits(number: string) {
    if (this.store.cachedOperator) {
      this.store.displayValue = number;
      this.store.cachedOperator = false;
    } else {
      this.store.displayValue === '0'
        ? (this.store.displayValue = number)
        : (this.store.displayValue = this.store.displayValue + number);
    }
    // const convertedNumber = number.replace(/(.)(?=(\d{3})+$)/g, '$1,');
    this.store.clearAll = false;
  }

  displayDigitsDotException() {
    if (this.store.cachedOperator) {
      this.store.displayValue = '0.';
      this.store.cachedOperator = false;
    } else if (!/\./.test(this.store.displayValue)) {
      this.store.displayValue = this.store.displayValue + '.';
      this.store.cachedOperator = false;
    }
    this.store.clearAll = false;
  }

  cumputeOperation(operator: string) {
    const input = parseFloat(this.store.displayValue);

    if (this.store.value === null) {
      this.store.value = input;
    } else if (this.store.operator) {
      const currentValue = this.store.value || 0;
      const operatedNumber = operations(
        this.store.operator,
        currentValue,
        input
      );
      this.store.value = operatedNumber;
      this.store.displayValue = String(operatedNumber);
    }
    this.store.cachedOperator = true;
    this.store.operator = operator;
    this.store.clearAll = false;
  }
}

const store = new Store();
export default store;
