import React, {forwardRef, useImperativeHandle} from 'react';
import styled from 'styled-components';
import SizeModalContent from './SizeModalContent.jsx';

const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0;
  max-height: 92vh;
  max-width: 85vw;
  padding: 0;
  visibility: visible;
  z-index: 99;
`;

const BackDrop = styled.div`
  background-color: rgba(0,0,0,0.6);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index:1;


`;

const Box = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #000;
  border-radius: 0;
  height: 80%;
  left: 50%;
  position: relative;
  padding:20px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  z-index: 2;

`;

const ContentBox = styled.div`
  height: 100%;
  overflow-y: auto;
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
  z-index: 100;
  margin:0;
  visibility: visible;
`;



const SizeGuideModal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

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
      <div>
        <Body>
          <BackDrop>
            <Box>
              <CloseButton onClick={handleClose}>&Chi;</CloseButton>
              <ContentBox>
              <SizeModalContent />
              </ContentBox>
            </Box>
          </BackDrop>
        </Body>

      </div>
    )
  }
  return null
})

export default SizeGuideModal;