import React from 'react';
import styled from 'styled-components';

const LearnMoreButton = styled.button`
  background: none;
  border: none;
  border-top-color: initial;
  border-top-style: none;
  border-top-width: initial;
  border-right-color: initial;
  border-right-style: none;
  border-right-width: initial;
  border-bottom-color: initial;
  border-bottom-style: none;
  border-bottom-width: initial;
  border-left-color: initial;
  border-left-style: none;
  border-left-width: initial;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  color: inherit;
  font: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-variant-caps: inherit;
  font-variant-numeric: inherit;
  font-variant-east-asian: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 0;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  text-align: inherit;
  text-transform: inherit;

`;

const LearnMoreDiv = styled.div`
  background-color: transparent;
  color: #000;
  cursor: pointer;
  display: inline;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: underline;
  text-decoration-line: underline;
  text-decoration-style: initial;
  text-decoration-color: initial;
  transition: color .1s cubic-bezier(.3,0,.45,1),background-color .1s cubic-bezier(.3,0,.45,1);
  transition-property: color, background-color;
  transition-duration: 0.1s, 0.1s;
  transition-timing-function: cubic-bezier(0.3, 0, 0.45, 1), cubic-bezier(0.3, 0, 0.45, 1);
  transition-delay: 0s, 0s;
  vertical-align: bottom;
  ${LearnMoreButton}:hover & {
    background-color: #000;
    color: #fff;
  }
    `;

  const LearnMore = () => (
    <LearnMoreButton>
      <LearnMoreDiv>Learn more</LearnMoreDiv>
    </LearnMoreButton>
  );


  export default LearnMore;