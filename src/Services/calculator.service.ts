import { operations } from '../Utils/utils';
import store from '../Store/store';
import { States } from '../Store/AppState';
import { runInAction } from 'mobx';

export const calculate = (
  operator: string,
  prev: number,
  next: number
): Promise<number> => {
  runInAction(() => {
    store.appState.state = States.PENDING;
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = operations(operator, prev, next);
      if (result === Infinity) {
        runInAction(() => {
          store.appState.state = States.ERROR;
        });
        resolve(result);
      }
      runInAction(() => {
        store.appState.state = States.NORMAL;
      });
      resolve(result);
    }, 200);
  });
};
