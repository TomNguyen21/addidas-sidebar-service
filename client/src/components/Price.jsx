import React from 'react';
import Styled from 'styled-components';

const PriceClass = styled.div`
  font-weight: 700;
  white-space: nowrap;
`;

const OptionClass = styled.span`
  margin-top: 5px;
  display: block;
`;

const Price = () => (
  <div>
    <PriceClass>$85</PriceClass>
    <OptionClass>or pay over time in interest-free installments with Affirm or Klarna.</OptionClass>
  </div>

)

export default Price;