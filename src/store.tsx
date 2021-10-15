import { makeAutoObservable } from 'mobx';

interface state {
  value: number | null;
  displayValue: string;
  operator: string | null;
  waitingForOperand: boolean;
}

const operations = (
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
    waitingForOperand: false,
  };
  constructor() {
    makeAutoObservable(this);
  }

  restDisplay() {
    this.store.value = 0;
    this.store.displayValue = '0';
    this.store.operator = null;
    this.store.waitingForOperand = false;
  }

  displayDigits(number: string) {
    if (this.store.waitingForOperand) {
      this.store.displayValue = number;
      this.store.waitingForOperand = false;
    } else {
      this.store.displayValue === '0'
        ? (this.store.displayValue = number)
        : (this.store.displayValue = this.store.displayValue + number);
    }
  }

  displayDigitsDotException() {
    if (!/\./.test(this.store.displayValue)) {
      this.store.displayValue = this.store.displayValue + '.';
      this.store.waitingForOperand = false;
    }
  }

  cumputeOperation(operator: string) {
    const input = parseFloat(this.store.displayValue);

    if (this.store.value === null) {
      this.store.value = input;
    } else if (this.store.operator) {
      const currentValue = this.store.value || 0;

      const newValue = operations(this.store.operator, currentValue, input);
      this.store.value = newValue;
      this.store.displayValue = String(newValue);
    }
    this.store.waitingForOperand = true;
    this.store.operator = operator;
  }
}

const store = new Store();
export default store;
