import React from 'react';
import styled from 'styled-components';

const PriceClass = styled.div`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  white-space: nowrap;
`;

const OptionClass = styled.span`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  display: block;
  // font-style: normal;
  font-size: 14px;
  margin-top: 5px;
  text-rendering: optimizeLegibility;
  text-transform: none;
`;

const Price = () => (
  <div>
    <PriceClass>$85</PriceClass>
    <OptionClass>or pay over time in interest-free installments with Affirm or Klarna.</OptionClass>
  </div>
)

export default Price;