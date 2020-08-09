import React from 'react';
import CategoryReview from './CategoryReview.jsx';
import styled from 'styled-components';
import Title from './Title.jsx';
import Price from './Price.jsx';
import LearnMore from './LearnMore.jsx';
import Discount from './Discount.jsx';


const Body = styled.div`
  // display: flex;
  background-color: #F4EBF4;
  padding: 20px;
`;

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Body>
        <CategoryReview />
        <br></br>
        <Title />
        <br></br>
        <Price />
        <br></br>
        <LearnMore />
        <br></br>
        <Discount />
      </Body>
    )
  }
};


export default App;