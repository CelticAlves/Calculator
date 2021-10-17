import { action, makeObservable, observable, runInAction } from 'mobx';
import { ICalculator } from '../Types/types';
import { calculate } from '../Services/calculator.service';

export class CalculatorStore implements ICalculator {
  value: number = null;
  displayValue = '0';
  operator: string = null;
  cachedOperator = false;
  clearAll = true;

  constructor() {
    makeObservable(this, {
      value: observable,
      displayValue: observable,
      restHistory: action,
      restDisplay: action,
      sign: action,
      percentage: action,
      displayDigits: action,
      displayDigitsDotException: action,
      cumputeOperation: action,
    });
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

  async cumputeOperation(operator: string) {
    const input = parseFloat(this.displayValue);

    if (this.value === null) {
      this.value = input;
    } else if (this.operator) {
      const currentValue = this.value || 0;
      const operatedNumber = await calculate(
        this.operator,
        currentValue,
        input
      );
      runInAction(() => {
        this.value = operatedNumber;
        this.displayValue = String(operatedNumber);
      });
    }
    this.cachedOperator = true;
    this.operator = operator;
    this.clearAll = false;
  }
}
