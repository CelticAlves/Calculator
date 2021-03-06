import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import store from '../../Store/store';
import { CalculatorStyles } from './Calculator.styled';

const Calculator = () => {
  const loading = store.appState.state === 'pending' ? 'disabled' : '';
  const displayFormatted = () => {
    const display = store.calculator.displayValue;
    const convertedNumber = display.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return convertedNumber;
  };
  const handleNumbers = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const event = e.target as HTMLElement;
    const key = event.innerText;

    if (!event.classList.contains('numpad')) return;

    if (key === '.') {
      store.calculator.displayDigitsDotException();
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
          {displayFormatted()}
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
          className={`numpad one key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          1
        </div>
        <div
          data-test="numpad-two"
          className={`numpad two key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          2
        </div>
        <div
          className={`numpad three key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          3
        </div>
        <div
          className={`numpad four key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          4
        </div>
        <div
          className={`numpad five key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          5
        </div>
        <div
          className={`numpad six key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          6
        </div>
        <div
          className={`numpad seven key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          7
        </div>
        <div
          className={`numpad eight key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          8
        </div>
        <div
          className={`numpad nine key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          9
        </div>
        <div
          className={`numpad zero key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
        >
          0
        </div>
        <div
          className={`numpad dot key ${loading}`}
          onClickCapture={action((e) => handleNumbers(e))}
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
          data-test="sum"
          className="operator key"
          onClickCapture={(e) => handleOperators(e)}
        >
          +
        </div>
        <div
          className="operator key"
          onClickCapture={action((e) => handleOperators(e))}
        >
          =
        </div>
      </section>
    </CalculatorStyles>
  );
};
export default observer(Calculator);
