import React from 'react';
import CategoryReview from './CategoryReview.jsx';
import styled from 'styled-components';
import Title from './Title.jsx';
import Price from './Price.jsx';
import LearnMore from './LearnMore.jsx';
import Discount from './Discount.jsx';
import SizeSelection from './SizeSelection.jsx';
import SizeGuide from './SizeGuide.jsx';



const Body = styled.div`
  display: flex;
  // padding-left: 30px;
  // padding-right: 30px;
  padding: 30px;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  border-left: 1px solid #ebedee;
`;

const MainBody = styled.div`
  flex: 3;
`;
const SideBar = styled.div`
  flex: 1;
  padding-left: 30px;
`;



const App = () => {
  const [isOpen, setisOpen] = React.useState(false);

  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: false
  //   }
  //   this.handleIsOpen = this.handleIsOpen.bind(this)
  // }

  return (
    <Body>
      <MainBody></MainBody>
      <SideBar>
        <CategoryReview />
        <Title />
        <br></br>
        <Price />
        <br></br>
        <LearnMore />
        <br></br>
        <Discount />
        <br></br>
        <SizeSelection />
        <br></br>
        <SizeGuide />
      </SideBar>
    </Body>
  )
};


export default App;