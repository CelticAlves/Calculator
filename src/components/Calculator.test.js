import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './calculator/Calculator';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Calculator />);
const findByAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
//   console.log(button.debug());
test('renders calculator ', () => {
  const wrapper = setup();
  //find element
  const appComponent = findByAttribute(wrapper, 'calculator-app');
  expect(appComponent.length).toBe(1);
});

test('On load for the first time the calculator should be 0', () => {
  const wrapper = setup();
  //find element
  const display = findByAttribute(wrapper, 'display');
  expect(display.text()).toBe('0');
});

test('Simulate a click and see if the display has changed', () => {
  const wrapper = setup();
  //find number one and copy the text and see if it's indeed one
  const numberOne = findByAttribute(wrapper, 'numpad-one');
  expect(numberOne.text()).toBe('1');
  //find number one and click it
  const numberGotClicked = findByAttribute(wrapper, 'numpad-one');
  // numberGotClicked.prop('onClick')();
  numberGotClicked.simulate('click');
  // expect(display).toBe('1');

  wrapper.update();
  // const display = findByAttribute(wrapper, 'display').text();
  // expect(display).toBe('1');
});
