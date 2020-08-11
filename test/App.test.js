import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

// import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import CategoryReview from '../client/src/components/CategoryReview';
import LearnMore from '../client/src/components/LearnMore';


Enzyme.configure({ adapter: new Adapter() });

describe('App',  () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('Categoryreview', () => {
  it('should render correctley with no props', () => {
    const component = shallow(<CategoryReview />);
    expect(component).toMatchSnapshot();
  })
})


describe('LearnMore', () => {
  it('Learn component should render correctley with no props', () => {
    const component = shallow(<LearnMore />);
    expect(component).toMatchSnapshot();
  });

  it('should check for button existance', () => {
    const component = shallow(<LearnMore />);
    const learnButton = component.find('LearnMoreButton');
    expect(learnButton.exists()).toBe(true);
  });


})


// describe('App', () => {
//   const wrapper = shallow(<App />);
//   it('should show the text', () => {
//     const text = wrapper.find('div');
//     expect(text.text()).toBe('WOMEN');
//   });
// });

// it('should render List with the correct styles', () => {
//   // const component = render(<LearnMore />)
//   const button = renderer.create(<LearnMore />).toJSON()

//   expect(button).toHaveStyleRule('cursor', 'pointer')
// })