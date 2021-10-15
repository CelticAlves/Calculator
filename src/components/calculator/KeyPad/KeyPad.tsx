import { KeyPadStyles } from './KeyPad.styled';
// import { useState } from 'react';
import store from '../../../store';
import { observer } from 'mobx-react';

const KeyPad = () => {
  const handleNumbers = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const event = e.target as HTMLElement;
    const key = event.innerText;

    if (!event.classList.contains('numbers')) return;

    if (key === '.') {
      store.displayDigitsDotException();
    } else {
      store.displayDigits(event.innerText);
    }
  };
  const handleOperators = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const event = e.target as HTMLElement;

    if (!event.classList.contains('operator')) return;
    store.cumputeOperation(event.innerText);
  };

  return (
    <KeyPadStyles>
      <div className="grid-numbers" onClickCapture={(e) => handleNumbers(e)}>
        <div className="numbers one">9</div>
        <div className="numbers two">8</div>
        <div className="numbers three">7</div>
        <div className="numbers four">6</div>
        <div className="numbers five">5</div>
        <div className="numbers six">4</div>
        <div className="numbers seven">3</div>
        <div className="numbers eight">2</div>
        <div className="numbers nine">1</div>
        <div className="numbers zero">0</div>
        <div className="numbers dot">.</div>
      </div>
      <div
        className="grid-operators"
        onClickCapture={(e) => handleOperators(e)}
      >
        <div className="operator">+</div>
        <div className="operator">×</div>
        <div className="operator">-</div>
        <div className="operator">÷</div>
        <div className="operator">=</div>
      </div>

      {/* 
      <div className="numbers">c</div>
      <div className="numbers">+/-</div>
      <div className="numbers">%</div>


     */}
    </KeyPadStyles>
  );
};
export default observer(KeyPad);
