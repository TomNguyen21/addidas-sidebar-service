import React from 'react';
import styled from 'styled-components';

const ProductName = styled.div`
  display: block;
  font-family: AdihausDIN Cn,Helvetica,Arial,sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 44px;
  line-height: 38px;
  text-transform: uppercase;
`;

const Color= styled.div`
  display: block;
  color: #000;
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
  <br></br>
  <Color>Cloud White / Core Black / Cloud White</Color>
  </div>
);

export default Title;