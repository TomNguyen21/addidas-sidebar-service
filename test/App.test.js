import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';

// import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';


Enzyme.configure({ adapter: new Adapter() });



describe('App', () => {
  const wrapper = shallow(<App />);
  it('should show the text', () => {
    const text = wrapper.find('div p');
    expect(text.text()).toBe('Hello World!');
  });
});