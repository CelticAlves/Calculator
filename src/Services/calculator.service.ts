import { operations } from '../Utils/utils';
import store from '../Store/store';

export const calculate = (
  operator: string,
  prev: number,
  next: number
): number => {
  const result = operations(operator, prev, next);
  store.appState.state = 'pending';
  setTimeout(() => {
    if (result === Infinity) {
      store.appState.state = 'error';
      return result;
    }
    store.appState.state = 'completed';
    return result;
  }, 100);
  return result;
};
