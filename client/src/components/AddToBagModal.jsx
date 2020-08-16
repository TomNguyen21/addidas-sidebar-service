import React, {useState, forwardRef, useImperativeHandle} from 'react';
import styled from 'styled-components';
import BagThumbnail from './BagThumbnail.jsx';


const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0;
  max-height: 92vh;
  padding: 0;
  visibility: visible;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const BackDrop = styled.div`
  background-color: rgba(0,0,0,0.6);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`;

const Box = styled.div`
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-radius: 0;
  background-color: #fff;
  border-right: 1px solid #000;
  border-top: 1px solid #000;
  height: auto;
  left: 50%;
  position: relative;
  padding:20px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  z-index: 101;
`;

const Title = styled.h5`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  margin-top: 1px;
  margin-bottom: 18px;
  padding-right: 15px;
  text-transform: uppercase;
`;

const CloseButton = styled.button`
  background: #fff;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  font-size: 25px;
  height: 40px;
  position: absolute;
  right: -17px;
  text-align: center;
  top: -17px;
  width: 40px;
`;



const AddToBagModal = forwardRef(({product}, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => handleOpen(),
      close: () => handleClose()
    }
  });

  const handleOpen = () => {
    setDisplay(true);
  }

  const handleClose = () => {
    setDisplay(false);
  }

  if (display) {
    return(
      <Body>
        <Wrapper>
          <BackDrop onClick={handleClose}>
            <Box>
              <Title>SUCCESSFULLY ADDED TO BAG!</Title>
              <BagThumbnail product={product}/>
              <CloseButton onClick={handleClose}>&Chi;</CloseButton>
            </Box>
          </BackDrop>
        </Wrapper>

      </Body>
    )
  }
  return null
})

export default AddToBagModal;