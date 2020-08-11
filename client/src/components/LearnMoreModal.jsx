import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  margin: 0;
  max-height: 92vh;
  padding: 0;
  box-sizing: border-box;
  visibility: visible;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.6);

`;

const Box = styled.div`
  border-bottom: 1px solid #000;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(0, 0, 0);
  border-left: 1px solid #000;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: rgb(0, 0, 0);
  border-radius: 0;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: #fff;
  border-right: 1px solid #000;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgb(0, 0, 0);
  border-top: 1px solid #000;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgb(0, 0, 0);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 22%;
  width: 45%;
  background-color: white;

  z-index: 101;
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right:20px;
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
  text-rendering: optimizeLegibility;
  text-transform: none;
  white-space: pre-line;
`;


class LearnMoreModal extends React.Component {
  constructor() {
    super();
    this.state = {
      display : true
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      display: false
    })
  }

  render () {
    if (this.state.display) {
      return(
        <Body>
          <Wrapper>
            <BackDrop onClick={this.handleClose}>
              <Box>
                <Title>Paying in installments</Title>
                <Text>Want to spread out the cost of your order with adidas? Select ‘Affirm’ or ‘Klarna‘ as your payment method at checkout, and you can pay in interest-free installments, with no hidden fees. Following a quick eligibility check, you’re all set!
                You will be redirected to Affirm's or Klarna´s website.​ </Text><br></br>

                <Text>Affirm payments are subject to eligibility check and approval. Estimated payment amount excludes taxes and shipping fees. Affirm Payment options are provided by Cross River Bank, Member FDIC.​</Text>
              </Box>
            </BackDrop>
          </Wrapper>
        </Body>
      )
    }
    return null
  }
}



export default LearnMoreModal;
