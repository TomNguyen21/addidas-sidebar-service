import React from 'react';
import CategoryReview from './CategoryReview.jsx';
import styled from 'styled-components';


const Body = styled.div`
  // display: flex;
  background-color: #F4EBF4;
  padding: 20px;
`;

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Body>
        <CategoryReview />
      </Body>
    )
  }
};


export default App;