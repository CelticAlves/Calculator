import Display from './Display/Display';
import KeyPad from './KeyPad/KeyPad';
import { CalculatorStyle } from './Calculator.styled';
const Calculator = () => {
  return (
    <CalculatorStyle>
      <Display />
      <KeyPad />
    </CalculatorStyle>
  );
};
export default Calculator;
