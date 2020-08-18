import React from 'react';
import styled from 'styled-components';

const DiscountDiv = styled.h5`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Description = styled.span`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 14px;
`;

const Discount = ()=> (
  <div>
    <DiscountDiv>Up to 25% off</DiscountDiv>
    <Description>Get 15% off with code SAVINGS at checkout. Spend $120 or more to unlock 25% off your order. Exclusions apply.</Description>
  </div>
)
export default Discount;
