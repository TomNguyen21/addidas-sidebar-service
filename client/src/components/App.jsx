import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryReview from './CategoryReview.jsx';
import styled from 'styled-components';
import Title from './Title.jsx';
import Price from './Price.jsx';
import LearnMore from './LearnMore.jsx';
import Discount from './Discount.jsx';
import SizeSelection from './SizeSelection.jsx';
import SizeGuide from './SizeGuide.jsx';
import AddToBag from './AddToBag.jsx';


const Body = styled.div`
  display: flex;
  // position: sticky;
  background: #fff;
  padding: 30px 40px;
  overflow-x: hidden;
  overflow-y: scroll;
  border-left: 1px solid #ebedee;
`;

const MainBody = styled.div`
  flex: 3;
`;
const SideBar = styled.div`
  flex: 1;
  padding-left: 30px;
`;

const App = (props) => {
  const [isOpen, setisOpen] = useState(false);
  const [product, setProduct] = useState([])

  const getData = () => {
    axios.get('/sidebar/summary')
    .then(updateData)
    .catch(console.log)
  }

  const updateData = (product) => {
    setProduct(product.data);
  }

  const postData = (product) => {
    axios.post('/sidebar/summary', product)
    .then(getData)
    .catch(console.log)

  }

  useEffect(() => {
    getData()
  }, [])
  if(!product[0]) {
    return null
  }
  return (
    <Body>
      <SideBar>
        <CategoryReview product={product[0]}/>
        <Title />
        <br></br>
        <Price productPrice={product[0].price}/>
        <br></br>
        <LearnMore />
        <br></br>
        <Discount />
        <br></br>
        <SizeSelection postData={postData} id={product[0].id}/>
        <br></br>
        <SizeGuide />
        <AddToBag product={product[0]}/>
      </SideBar>
    </Body>
  )
};


export default App;