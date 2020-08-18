import React from 'react';
import styled from 'styled-components'

const Body = styled.section`
  padding: 40px 25px 0 20px;
  background-color: #ebedee;
  width: auto;
`;
const H5Tag = styled.h4`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const InnerBody = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;

`;

const ContentBox = styled.div`
  padding: 0 30px 0 0;
  width: 50%;
  background-color: inherit;
  margin: 0;
`;

const UlTag = styled.ul`
font-weight: 700;
font-size: 16px;
margin-bottom: 16px;
list-style-position: outside;
padding-left: 20px;
`;

const ImageBox = styled.div`
  position: relative;
  width: 50%;
  text-align: center;
`;


const HowToMeasure = () => (
  <Body>
    <H5Tag>HOW TO MEASURE</H5Tag>
    <InnerBody>
      <ContentBox>
        <p style={{fontWeight:400, color:"rgba(0,0,0,0.7)"}}>Follow these easy steps to get the right size. For the best fit, measure your feet at the end of the day.</p>
        <div>
          <UlTag>
            <li>
              <span>1.</span>
              <span style={{fontWeight:400, color:"rgba(0,0,0,0.7)"}}>Step on а piece of paper with your heel slightly touching a wall behind.</span>
            </li>
            <br></br>
            <li>
              <span>2.</span>
              <span style={{fontWeight:400, color:"rgba(0,0,0,0.7)"}}>Мark the end of your longest toe on the paper (you might need a friend to help you) and measure from the wall to the marking.</span>
            </li>
            <br></br>
            <li>
              <span>3.</span>
              <span style={{fontWeight:400, color:"rgba(0,0,0,0.7)"}}>Do the same for the other foot and compare measurements with our size chart to get the right size.</span>
            </li>
          </UlTag>
        </div>
      </ContentBox>
      <ImageBox>
        <img src="https://www.adidas.com/glass/react/058cd47/assets/img/size-charts/shoes/how-to-measure-shoes.png" width="427px" heigth="427px"></img>
      </ImageBox>
    </InnerBody>
  </Body>

)

export default HowToMeasure;