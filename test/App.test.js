import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';

// import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';


Enzyme.configure({ adapter: new Adapter() });

describe('App',  () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});



// describe('App', () => {
//   const wrapper = shallow(<App />);
//   it('should show the text', () => {
//     const text = wrapper.find('div');
//     expect(text.text()).toBe('WOMEN');
//   });
// });