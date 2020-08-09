import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';
import Title from './Title.jsx';
import Price from './Price.jsx';
import LearnMore from './LearnMore.jsx';

const ReviewButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  text-align: inherit;
  text-transform: inherit;

`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row norwrap;
  justify-content: space-between;
  text-align: center;
`;

const Category = styled.div`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  // letter-spacing: 2px;
`;

const Review = styled.div`
  display: inline-flex;
  align-item: center;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-line: underline;
  background-color: transparent;
  cursor: pointer;
  // letter-spacing: 2px;
  ${ReviewButton}:hover & {
    background-color: #000;
    color: #fff;
  }
  word-spacing: 2em
`;


const CategoryReview = () => (
  <div>
      <Wrapper>
        <Category>
          women . original
        </Category>
        <ReviewButton>
          <Review>
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            7753
          </Review>
        </ReviewButton>
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