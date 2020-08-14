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
        </BagSection>
      {/* </ImageSection> */}
    </Body>
  )
};

export default BagThumbnail;


