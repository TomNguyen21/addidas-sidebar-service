import React from 'react';
import styled from 'styled-components';

const ProductName = styled.h1`
  display: block;
  font-family: AdihausDIN Cn,Helvetica,Arial,sans-serif;
  font-style: italic;
  font-weight: 512;
  font-size: 32px;
  line-height: 44px;
  // letter-spacing: 1.5px;
  margin-bottom: 20px;
  text-transform: uppercase;
  box-sizing: border-box;
`;

const Color= styled.div`
  color: #000;
  display: block;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 15px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

const Title = () => (
  <div>
    <ProductName> SuperStar shoes</ProductName>
    <Color>Cloud White / Core Black / Cloud White</Color>
  </div>
);

export default Title;