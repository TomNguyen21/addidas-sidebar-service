import React from 'react';
import styled from 'styled-components';

const LearnMoreButton = styled.button`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  display: inline;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: underline;
  &:hover {
    background-color: #000;
    color: #fff;
  }
    `;

  class LearnMore extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.props.Func();
    }
    render() {
      return(
        <LearnMoreButton onClick={this.handleClick}>Learn more</LearnMoreButton>
      )
    }
  }


  LearnMoreButton.displayName = 'LearnMoreButton';
  export default LearnMore;









// const LearnMoreButton = styled.button`
//   background: none;
//   border: none;
//   color: inherit;
//   font: inherit;
//   font-style: inherit;
//   padding: 0;
//   text-align: inherit;
//   text-transform: inherit;
// `;
