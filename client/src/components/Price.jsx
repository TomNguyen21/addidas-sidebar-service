import React from 'react';
import styled from 'styled-components';

const PriceClass = styled.div`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
`;

const OptionClass = styled.span`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  display: block;
  font-size: 14px;
  margin-top: 5px;
`;

const Price = () => (
  <div>
    <PriceClass>$85</PriceClass>
    <OptionClass>or pay over time in interest-free installments with Affirm or Klarna.</OptionClass>
  </div>
)

export default Price;