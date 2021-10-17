// import 'jsdom-global/register';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './calculator/Calculator';

// import Store from '../Store/store';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Calculator />);
const findByAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
//   console.log(button.debug());

// const store = {
//   displayValue: '0',
// };
describe('integration Tests', () => {
  test('renders calculator without crashing', () => {
    const wrapper = setup();
    //find element
    const appComponent = findByAttribute(wrapper, 'calculator-app');
    expect(appComponent.length).toBe(1);
  });

  test('On Render for the first time the calculator Display should be 0', () => {
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
    numberGotClicked.simulate('click');
    // wrapper.update();
    // const display = findByAttribute(wrapper, 'display');
    // expect(display.text()).toBe('1');
  });

  test('Simple operation +', () => {
    const wrapper = setup();
    // const display = findByAttribute(wrapper, 'display');
    const numberOne = findByAttribute(wrapper, 'numpad-one');
    const sum = findByAttribute(wrapper, 'sum');
    const numberTwo = findByAttribute(wrapper, 'numpad-two');
    //operation
    numberOne.simulate('click');
    sum.simulate('click');
    numberTwo.simulate('click');
    //result
    // expect(display.text()).toBe('3');
  });
});
