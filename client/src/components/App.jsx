import React from 'react';
import CategoryReview from './CategoryReview.jsx';
import styled from 'styled-components';
import Title from './Title.jsx';
import Price from './Price.jsx';
import LearnMore from './LearnMore.jsx';
import Discount from './Discount.jsx';
import SizeSelection from './SizeSelection.jsx'


const Body = styled.div`
  display: flex;

`;

const MainBody = styled.div`
  flex: 2;
`;
const SideBar = styled.div`
  flex: 1;
  padding: 20px;
`;


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Body>
        <MainBody></MainBody>
        <SideBar>
          <CategoryReview />
          <br></br>
          <Title />
          <br></br>
          <Price />
          <br></br>
          <LearnMore />
          <br></br>
          <Discount />
          <br></br>
          <SizeSelection />
        </SideBar>
      </Body>
    )
  }
};


export default App;