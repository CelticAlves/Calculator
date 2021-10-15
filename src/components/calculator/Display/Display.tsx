// import { Result } from './Display.styled';
import { useObserver } from 'mobx-react';
import store from '../../../store';

const Display = () => {
  return useObserver(() => (
    <div>
      <div>list:</div>
      <div>{store.store.displayValue}</div>
    </div>
  ));
};
export default Display;
