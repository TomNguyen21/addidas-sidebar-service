import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';
import Title from './Title.jsx';
import Price from './Price.jsx';
import LearnMore from './LearnMore.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row norwrap;
  justify-content: space-between;
  text-align: center;
`;

const Category = styled.div`
  // flex: 1;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Review = styled.div`
  display: flex;
  align-item: center;
  // flex: 1;
  // flex-flow: row norwrap;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  // position: center;
  // text-transform: uppercase;
  letter-spacing: 2px;

`;


const CategoryReview = () => (
  <div>
    <Wrapper>
      <Category>
        women . original
      </Category>
      <Review>
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        7753
      </Review>
    </Wrapper>
    <br></br>
    <Title />
    <br></br>
    <Price />
    <br></br>
    <LearnMore />
  </div>
);


export default CategoryReview;