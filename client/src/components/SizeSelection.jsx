import React, {setState, useState} from 'react';
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
  border-left-width: 1px solid rgb(235, 237, 238);
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-feature-settings: "frac";
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 40px;
  justify-content: center;
  line-height: 1em;
  letter-spacing: -.2px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  touch-action: manipulation;
`;

const SizeSelection = ({postData, id}) => {
  const [size, setSize] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const handleClick = (event) => {
    event.preventDefault;
    setSize(event.target.value);
    setQuantity(quantity+1);
    postData({id, size, quantity});
  }

  const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
  return (
    <div>
      <SelectSize>Select size</SelectSize>
      <br></br>
      <Body>
        <SizeTable>{sizes.map(size =>
            <Sizes name="size" value={size} onClick={handleClick}>{size}</Sizes>
          )}
        </SizeTable>
      </Body>
    </div>
  )
};

export default SizeSelection;