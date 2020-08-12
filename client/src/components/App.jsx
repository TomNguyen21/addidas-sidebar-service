import React from 'react';
import CategoryReview from './CategoryReview.jsx';
import styled from 'styled-components';
import Title from './Title.jsx';
import Price from './Price.jsx';
import LearnMore from './LearnMore.jsx';
import Discount from './Discount.jsx';
import SizeSelection from './SizeSelection.jsx';
import SizeGuide from './SizeGuide.jsx';
import AddToBag from './AddToBag.jsx';



const Body = styled.div`
  display: flex;
  position: sticky;
  background: #fff;
  padding: 30px 40px;
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
        <AddToBag />
      </SideBar>
    </Body>
  )
};


export default App;