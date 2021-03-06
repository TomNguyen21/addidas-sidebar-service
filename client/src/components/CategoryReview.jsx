import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';


const ReviewButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

const Wrapper = styled.div`
  display: flex;
  font-size: 11px;
  line-height: 15px;
  flex-flow: row norwrap;
  justify-content: space-between;
  text-align: center;
`;

const Category = styled.div`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Review = styled.div`
  align-item: center;
  cursor: pointer;
  display: inline-flex;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  text-decoration: underline;
  // letter-spacing: 2px;
  ${ReviewButton}:hover & {
    background-color: #000;
    color: #fff;
  }
  word-spacing: 2em
`;


const CategoryReview = ({product}) => (
  <div>
      <Wrapper>
        <Category>
          {product.category}
        </Category>
        <ReviewButton>
          <Review>
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            {product.numberOfReview}
          </Review>
        </ReviewButton>
      </Wrapper>
  </div>
);


export default CategoryReview;