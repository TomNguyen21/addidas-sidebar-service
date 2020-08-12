import React from 'react';
import styled from 'styled-components';

const ButtonFlex = styled.div`
  display: flex;
  margin-top: 20px;
`;

const AddToBagButton = styled.button`
font-size: 13px;
letter-spacing: 2px;
text-transform: uppercase;
font-family: AdihausDIN,Helvetica,Arial,sans-serif;
font-weight: 700;
justify-content: space-between;
width: 100%;
background-color: #000;
border-color: #fff;
color: #fff;
height: 50px;
align-items: center;
border-radius: 0;
cursor: pointer;
display: inline-flex;
min-height: 50px;
// padding: 0 21px;
// position: relative;
border-bottom: 1px solid #000;
border-left: 1px solid #000;
bottom: -3px;
height: 3px;
left: 3px;
&:after {
  border-right: 1px solid #000;
  border-top: 1px solid #000;
  height: 100%;
  right: -3px;
  top: 3px;
  width: 3px;
  content: "";
  display: block;
  position: absolute;
}
&:before {
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  bottom: -3px;
  height: 3px;
  left: 3px;
  width: 100%;
  content: "";
  display: block;
  position: absolute;
}
`;

const Icon = styled.svg`
  flex-shrink: 0;
  margin-left: 20px;
  display: inline-block;
  height: 24px;
  vertical-align: text-top;
  width: 24px;
  overflow: hidden;
  color: red;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
`;

const HeartButton = styled.button`


`;

const AddToBag = () => (
  <ButtonFlex>
    <AddToBagButton>Add to Bag</AddToBagButton>
    <Icon></Icon>
  </ButtonFlex>
)

export default AddToBag;