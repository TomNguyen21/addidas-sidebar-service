import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import sinon from 'sinon';


// import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import CategoryReview from '../client/src/components/CategoryReview';
import Discount from '../client/src/components/Discount'
import LearnMore from '../client/src/components/LearnMore';
import SizeTable from '../client/src/components/SizeTable';
import LearnMoreModal from '../client/src/components/LearnMoreModal'


Enzyme.configure({ adapter: new Adapter() });


describe('App',  () => {

  const wrapper = shallow(<App />);

  it('should render correctly in "debug" mode', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders one <LearnMore /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(LearnMore)).toHaveLength(1);
  });

  it('check for children', () => {
    expect(wrapper.children().length).toEqual(2)
  })
});

describe('Categoryreview', () => {
  it('should render correctley with no props', () => {
    const component = shallow(<CategoryReview />);
    expect(component).toMatchSnapshot();
  })
})


describe('LearnMore', () => {
  const wrapper = shallow(<LearnMore />);

  it('Learn component should render correctley with no props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('check for children', () => {
   expect(wrapper.children().length).toEqual(2)
 })

  it('should check for button existance', () => {
    const learnButton = wrapper.find('LearnMoreButton');
    expect(learnButton.exists()).toBe(true);
  });


  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow((
      <LearnMore onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('display', true);
  });


})
 describe('SizeTable should render properly', () => {
   it('renders list', () => {
     const wrapper = renderer.create(<SizeTable />)
     const arr = [5,6,7,9];
     expect(wrapper).toMatchSnapshot()
   })

 })

 describe('Discount', () => {
   const wrapper = shallow(<Discount />);
   const header = wrapper.find('styled.h5')

   it('Shoud check for H5 header', () => {
     expect(header).toBeDefined();
   })
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