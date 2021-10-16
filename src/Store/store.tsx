import { makeAutoObservable } from 'mobx';
import { CalculatorStore } from './CalculatorStore';

class Store {
  calculator: CalculatorStore;
  constructor() {
    makeAutoObservable(this);
    this.calculator = new CalculatorStore();
  }
}

const store = new Store();
export default store;
