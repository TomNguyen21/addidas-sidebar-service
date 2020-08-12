import React from 'react';
import styled from 'styled-components';
import SizeGuideModal from './SizeGuideModal.jsx'


const SizeGuideButton = styled.button`
  border: none;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  position: relative;
  padding-left: 24px;
  vertical-align: bottom;
  line-height: 15px;
  text-decoration-line: underline;
  text-transform: uppercase;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Measurement = styled.svg`
  height: 19px;
  left: 1px;
  margin-right: 7px;
  position: absolute;
  top: -1px;
  width: 20px;
`;

const GTag = styled.g`
  fill: none;
  stroke: currentColor;
`;

const SizeGuide = (props) => {

  const sizeModalRef = React.useRef();

  const handleIsOpen = () => {
    sizeModalRef.current.open()
  }

  return (
    <div>
      <SizeGuideButton onClick={handleIsOpen}>
        <Measurement viewBox="0 0 19 19">
          <GTag>
            <path d= "M.5 6.5h18v6H.5z" ></path>
            <path strokeLinecap="square" d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"></path>
          </GTag>
        </Measurement>
        Size Guide
      </SizeGuideButton>
      <SizeGuideModal ref={sizeModalRef}/>
    </div>
  )
}

export default SizeGuide;