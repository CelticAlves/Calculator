import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './components/calculator/Calculator';
import * as calc from './store';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Calculator />);
const findByDataTest = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper, 'calculator-app');
  expect(appComponent.length).toBe(1);
});

test('addition of numbers', () => {
  expect(calc.operations('+', 5, 5)).toBe(10);
});
test('multiplication of numbers', () => {
  expect(calc.operations('×', 5, 5)).toBe(25);
});
test('subtraction of numbers', () => {
  expect(calc.operations('-', 5, 5)).toBe(0);
});
test('division of numbers', () => {
  expect(calc.operations('÷', 5, 5)).toBe(1);
});
