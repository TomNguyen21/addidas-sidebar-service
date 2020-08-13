import React, {forwardRef, useImperativeHandle} from 'react';
import styled from 'styled-components';

const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0;
  max-height: 92vh;
  padding: 0;
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
  z-index: 0;
`;

const Box = styled.div`
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-radius: 0;
  background-color: #fff;
  border-right: 1px solid #000;
  border-top: 1px solid #000;
  height: 22%;
  left: 50%;
  position: relative;
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right:20px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  z-index: 1;
`;

const Title = styled.h5`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 1px;
  margin-bottom: 18px;
  padding-right: 15px;
  text-transform: uppercase;
`;

const Text = styled.div`
  color: rgba(0,0,0,0.7);
  font-size: 14px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  white-space: pre-line;
`;

const CloseButton = styled.button`
  background: #fff;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  font-size: 25px;
  height: 40px;
  position: absolute;
  right: 24.5%;
  text-align: center;
  top: 34.5%;
  width: 40px;
`;


const LearnMoreModal = forwardRef((props, ref) => {
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
      <Body>
        <Wrapper>
          <BackDrop onClick={handleClose}>
            <Box>
              <Title>Paying in installments</Title>
              <Text>Want to spread out the cost of your order with adidas? Select ‘Affirm’ or ‘Klarna‘ as your payment method at checkout, and you can pay in interest-free installments, with no hidden fees. Following a quick eligibility check, you’re all set!
              You will be redirected to Affirm's or Klarna´s website.​ </Text><br></br>

              <Text>Affirm payments are subject to eligibility check and approval. Estimated payment amount excludes taxes and shipping fees. Affirm Payment options are provided by Cross River Bank, Member FDIC.​</Text>
            </Box>
          </BackDrop>
        </Wrapper>
        <CloseButton onClick={handleClose}>&Chi;</CloseButton>
      </Body>
    )
  }
  return null
})



export default LearnMoreModal;
