import React from 'react';
import { CalculatorStyles } from './Calculator.styled';
import store from '../../Store/store';
import { observer } from 'mobx-react';

const Calculator = () => {
  const handleNumbers = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const event = e.target as HTMLElement;
    const key = event.innerText;

    if (!event.classList.contains('numpad')) return;

    if (key === '.') {
      store.calculator.displayDigitsDotException();
      // store.displayDigitsDotException();
    } else {
      store.calculator.displayDigits(event.innerText);
    }
  };
  const handleOperators = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const event = e.target as HTMLElement;

    if (!event.classList.contains('operator')) return;
    store.calculator.cumputeOperation(event.innerText);
  };

  const clear = store.calculator.clearAll ? 'AC' : 'C';

  return (
    <CalculatorStyles>
      <section data-test="calculator-app" className="grid-wrapper">
        <div data-test="display" className="display">
          {store.calculator.displayValue}
        </div>
        <div
          className="functions clear key"
          onClickCapture={() =>
            store.calculator.clearAll
              ? store.calculator.restHistory()
              : store.calculator.restDisplay()
          }
        >
          {clear}
        </div>
        {/* function keys */}
        <div
          className="functions sign key"
          onClickCapture={() => store.calculator.sign()}
        >
          ±
        </div>
        <div
          className="functions percentage key"
          onClickCapture={() => store.calculator.percentage()}
        >
          %
        </div>
        {/* number keys */}
        <div
          data-test="numpad-one"
          className="numpad one key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          1
        </div>
        <div
          className="numpad two key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          2
        </div>
        <div
          className="numpad three key "
          onClickCapture={(e) => handleNumbers(e)}
        >
          3
        </div>
        <div
          className="numpad four key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          4
        </div>
        <div
          className="numpad five key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          5
        </div>
        <div
          className="numpad six key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          6
        </div>
        <div
          className="numpad seven key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          7
        </div>
        <div
          className="numpad eight key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          8
        </div>
        <div
          className="numpad nine key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          9
        </div>
        <div
          className="numpad zero key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          0
        </div>
        <div
          className="numpad dot key"
          onClickCapture={(e) => handleNumbers(e)}
        >
          .
        </div>
        {/* arithmetic keys */}
        <div
          className="operator key"
          onClickCapture={(e) => handleOperators(e)}
        >
          ÷
        </div>
        <div
          className="operator key"
          onClickCapture={(e) => handleOperators(e)}
        >
          ×
        </div>
        <div
          className="operator key"
          onClickCapture={(e) => handleOperators(e)}
        >
          -
        </div>
        <div
          className="operator key"
          onClickCapture={(e) => handleOperators(e)}
        >
          +
        </div>
        <div
          className="operator key"
          onClickCapture={(e) => handleOperators(e)}
        >
          =
        </div>
      </section>
    </CalculatorStyles>
  );
};
export default observer(Calculator);
