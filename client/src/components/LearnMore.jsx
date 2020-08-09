import React from 'react';
import styled from 'styled-components';

const LearnMoreButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  font-style: inherit;
  padding: 0;
  text-align: inherit;
  text-transform: inherit;
`;

const LearnMoreDiv = styled.div`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  display: inline;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: underline;
  text-decoration-line: underline;
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