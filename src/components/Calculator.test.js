import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './calculator/Calculator';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Calculator />);
const findByDataTest = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
//   console.log(button.debug());
test('renders calculator ', () => {
  const wrapper = setup();
  //find element
  const appComponent = findByDataTest(wrapper, 'calculator-app');
  expect(appComponent.length).toBe(1);
});

test('On load for the first time the calculator should be 0', () => {
  const wrapper = setup();
  //find element
  const display = findByDataTest(wrapper, 'display').text();
  expect(display).toBe('0');
});

test('Simulate a click and see if the display has changed', () => {
  const wrapper = setup();
  //find number one and copy the text and see if it's indeed one
  const numberOne = findByDataTest(wrapper, 'numpad-one').text();
  expect(numberOne).toBe('1');
  //find number one and click it
  const numberGotClicked = findByDataTest(wrapper, 'numpad-one');
  numberGotClicked.simulate('click');
  //wrapper.find('a').simulate('click');
  // const display = findByDataTest(wrapper, 'display').text();
  // expect(display).toBe('1');
});
