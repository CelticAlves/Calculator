import { makeAutoObservable } from 'mobx';
import { CalculatorStore } from './CalculatorStore';
import { AppState } from './AppState';
class Store {
  calculator: CalculatorStore;
  appState: AppState;
  constructor() {
    makeAutoObservable(this);
    this.calculator = new CalculatorStore();
    this.appState = new AppState();
  }
}

const store = new Store();
export default store;
