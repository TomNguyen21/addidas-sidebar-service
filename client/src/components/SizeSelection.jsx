import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  background-color: #fff;
  color: #000;
  margin: 0;
  overflow-y: scroll;
  padding: 0;
  text-rendering: optimizeLegibility;
  text-transform: none;
`;

const SelectSize = styled.div`
  text-transform: uppercase;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 11px;
  line-height: 15px;
`;

const SizeTable = styled.div`
  border-left: 1px solid #ebedee;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(70px,1fr));

`;

const Sizes = styled.button`
  align-items: center;
  background-color: #FFF;
  border: 1px solid #ebedee;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: rgb(235, 237, 238);
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-feature-settings: "frac";
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 40px;
  // margin-bottom: -1px;
  justify-content: center;
  line-height: 1em;
  letter-spacing: -.2px;
  text-align: center;
  text-transform: uppercase;
  &:*,before,after {
    box-sizing: border-box;
  }
  touch-action: manipulation;
`;

const SizeSelection = () => (
  <div>
    <SelectSize>Select size</SelectSize>
    <br></br>
    <Body>
      <SizeTable>
        <Sizes><span>5</span></Sizes>
        <Sizes><span>5.5</span></Sizes>
        <Sizes><span>6</span></Sizes>
        <Sizes><span>6.5</span></Sizes>
        <Sizes><span>7</span></Sizes>
        <Sizes><span>7.5</span></Sizes>
        <Sizes><span>8</span></Sizes>
        <Sizes><span>8.5</span></Sizes>
        <Sizes><span>9</span></Sizes>
        <Sizes><span>9.5</span></Sizes>
        <Sizes><span>10</span></Sizes>
        <Sizes><span>10.5</span></Sizes>
        <Sizes><span>11</span></Sizes>
      </SizeTable>
    </Body>
  </div>
);

export default SizeSelection;