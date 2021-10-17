import { makeAutoObservable } from 'mobx';
import { IState } from '../Types/types';

export class AppState implements IState {
  state = 'pending';

  constructor() {
    makeAutoObservable(this);
  }
}
