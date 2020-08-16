import React from 'react';
import styled from 'styled-components';

const Body = styled.section`
  display: flex;
  margin-top: 20px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
`;

const ImageSection = styled.div`
  width: 50%;
  display: flex;
  margin-top: 20px;
  padding:0;
  margin-right:0;
`;

const BagSection = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-left: 20px;
  border-left: 1px solid #000;
`;

const ThumbnailSec = styled.div`
  width: 50%;
  padding-right: 20px;
  `;

const ProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2px;
`;

const BagPrice = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

const Line = styled.div`
  margin-bottom: 6px;
  border: 0;
  border-bottom: 1px solid #767677;
`;

const H3Tag = styled.h3`
  // color: #000;
  // fornt-size: 18px;
  font-style:noraml;
  line-height:16px;
  margin-button:20px;
  text-transform: uppercase;
  margin-top:0;
  // margin-left:0;
  width: 100%;
  // position: relative;
  margin-right:20px;
  padding:0;
  `;

const Description = styled.div`
  color: rgba(0,0,0,0.5)
  display: flex;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  width: 100%;
  margin-bottom: 2px;
  margin-left: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  `;

const Price = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  flex-wrap: wrap;
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
  padding: 0 21px;
  box-shadow: 3px 3px grey;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  &:hover {
    color: gray;
  }
`;
const AddToBagButton2 = styled.button`
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border-color: #000;
  color: #000;
  height: 50px;
  align-items: center;
  border-radius: 0;
  cursor: pointer;
  display: inline-flex;
  min-height: 50px;
  padding: 0 21px;
  border: 1px solid #000;
  &:hover {
    color: gray;
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
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
`;

const IconPath = styled.path`
  d: path("M17.59 7l5 5-5 5M0 12h22");
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  stroke-width: 2;
`;

const BagThumbnail = ({product}) => {
  return(
    <Body>
      <ImageSection>
        <ThumbnailSec>
          <img src={product.thumbnailPC} width="106px" height="106px" ></img>
        </ThumbnailSec>
        <ThumbnailSec>
          <H3Tag style={{fontWeight: 400, forntsSize: "14px"}}>superStar Shoes</H3Tag>
          <Price>${product.price}</Price>
          <Description>Color: {product.color}</Description>
          <Description>Size: {product.size}</Description>
          <Description>Quantity: {product.quantity}</Description>
        </ThumbnailSec>
      </ImageSection>
      {/* <ImageSection> */}
        <BagSection>
            <H3Tag style={{fontWeight: 900, color: "#000"}}>Your Bag</H3Tag>
            <div>7 items</div>
            <ProductDiv>
              <div>Total Product Cost:</div>
              <BagPrice>
                <span style={{color: "#000"}}>${product.price}</span>
              </BagPrice>
            </ProductDiv>
            <ProductDiv>
              <div>Total Delivery Cost:</div>
              <BagPrice>
                <span style={{marginRight: 0}}>FREE</span>
              </BagPrice>
            </ProductDiv>
            <div style={{ borderBottom: "1px solid rgb(118, 118, 119)", marginBottom:"6px"}}></div>
            <ProductDiv>
              <div><strong style={{fontFamily: "AdihausDIN,Helvetica,Arial,sans-serif"}}>Total:</strong></div>
              <BagPrice>
                <span>${product.price}</span>
              </BagPrice>
            </ProductDiv>
            <span>
              <dt>Installment options</dt>
              <p>Prefer to spread out the payment? Select ‘Affirm’ or ‘Klarna’ at checkout to pay in interest-free installments.</p>
            </span>
            <AddToBagButton>
              View bag
              <Icon viewBox="0 0 24 24">
                  <IconPath />
              </Icon>
            </AddToBagButton>
            <br></br>
            <AddToBagButton2>
              checkout
              <Icon viewBox="0 0 24 24">
                  <IconPath />
              </Icon>
            </AddToBagButton2>
        </BagSection>
      {/* </ImageSection> */}
    </Body>
  )
};

export default BagThumbnail;


