import React from 'react';
import styled from 'styled-components';
import LearnMoreModal from './LearnMoreModal.jsx';

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

  const LearnMore = (props) => {

    const modalRef = React.useRef();

    const handleIsOpen = () => {
      modalRef.current.handleIsOpen()
    }

    return(
      <div>
        <LearnMoreButton  onClick={handleIsOpen}>Learn more</LearnMoreButton>
        <LearnMoreModal ref={modalRef}/>
      </div>
    )
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
