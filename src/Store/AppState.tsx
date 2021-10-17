import { makeObservable, observable } from 'mobx';
import { IState } from '../Types/types';

export enum States {
  PENDING = 'pending',
  ERROR = 'error',
  NORMAL = 'normal',
}
export class AppState implements IState {
  state = States.NORMAL;

  constructor() {
    makeObservable(this, {
      state: observable,
    });
  }
}
