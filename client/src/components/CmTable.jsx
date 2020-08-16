import React from 'react';
import styled from 'styled-components';


const Header = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: #000;
  border-right: 1px solid #000;
  color: #fff;
  font-size: 14px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 700;
  left: 0;
  min-height: 50px;
  padding: 10px;
  position: sticky;
  width: 130px;
  text-align: center;
  z-index: 1;
`;

const TableCell2 = styled.div`
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  // border-right: 1px solid #000;
  color: #000;
  font-size: 14px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  left: 0;
  min-height: 50px;
  padding: 10px;
  width: 130px;
  text-align: center;
`;


const TableRowHead = styled.div`
  align-items: center;
  display: flex;
  width: max-content;
  min-width: 100%;
  background: #000;
  color: #fff;
  font-weight: 700;
  margin: 0;
`;

const TableRowBody = styled.div`
  align-items: stretch;
  display: flex;
  width: max-content;
  min-width: 100%;
  background: #fff;
  color: #000;
  font-weight: 400;
  margin: 0;

`;


const CmTable = () => {
  const arr = ['Heel-toe measurement','22.1','22.5','22.9', '23.3','23.8', '24.2', '24.6', '25', '25.5', '25.9 ', '26.3', '26.7','27.1', '27.6', '28', '28.4', '28.8', '29.3', '29.7', '30.1', '30.5', '31','31.4', '31.8', '32.6', '33.5','34.3', '35.2'];
  const arr2= ['EU','36','36 2/3','37 1/3', '38', '38 2/3', '39 1/3', '40', '40 2/3', '41 1/3', '42', '42 2/3',' 43 1/3', '44','44 2/3', '45 1/3', '46', '46 2/3', '47 1/3', '48', '48 2/3', '49 1/3', '50', '50 2/3', '51 1/3', '52 2/3', '53 1/3','54 2/3', '55 2/3'];
  const arr3= ['UK','3.5','4','4.5','5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5','11','11.5','12','12.5','13','13.5','14','14.5','15','16','17','18','19'];
  const arr4 = ['US - Mens','4','4.5','5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5','11','11.5','12','12.5','13','13.5','14','14.5','15','16','17','18','19','20'];
  const arr5 = ['US - Womens','5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5','11','11.5','12','12.5','13','13.5','14','14.5','15','15.5', '--', '--', '--', '--', '--', '--'];


  return (
    <div>
      <TableRowHead>
      {arr.map(function(size, index) {
        if (index > 0) return (<TableCell2 style={{backgroundColor: "#000", color: "#fff"}}>{size} cm</TableCell2>);
        return (
        <Header>
          {size}
        </Header>
        );
      })}
      </TableRowHead>

      <TableRowBody>
      {arr2.map(function(size, index) {
        if (index > 0 && index % 2 !== 0) {
          return (<TableCell2 style={{backgroundColor: "rgba(0,0,0,0.1)"}}>{size}</TableCell2>)
        } else if ( index > 0 && index % 2 === 0)
        {
          return <TableCell2>{size}</TableCell2>
        }
        return ( <TableCell2 style={{position: "sticky", zIndex: 100 , borderRight:"1px solid #000"}}>{size}</TableCell2>)
        }
      )}
      </TableRowBody>

      <TableRowBody>
      {arr3.map(function(size, index) {
        if (index > 0 && index % 2 !== 0) {
          return (<TableCell2 style={{backgroundColor: "rgba(0,0,0,0.1)"}}>{size}</TableCell2>)
        } else if ( index > 0 && index % 2 === 0)
        {
          return (<TableCell2>{size}</TableCell2>)
        }
        return ( <TableCell2 style={{position: "sticky", zIndex: 100, borderRight:"1px solid #000"}}>{size}</TableCell2>)
        }
      )}
      </TableRowBody>

      <TableRowBody>
      {arr4.map(function(size, index) {
        if (index > 0 && index % 2 !== 0) {
          return (<TableCell2 style={{backgroundColor: "rgba(0,0,0,0.1)"}}>{size}</TableCell2>)
        } else if ( index > 0 && index % 2 === 0)
        {
          return (<TableCell2>{size}</TableCell2>)
        }
        return ( <TableCell2 style={{position: "sticky", zIndex: 100 , borderRight:"1px solid #000"}}>{size}</TableCell2>)
        }
      )}
      </TableRowBody>

      <TableRowBody>
      {arr5.map(function(size, index) {
        if (index > 0 && index % 2 !== 0) {
          return (<TableCell2 style={{backgroundColor: "rgba(0,0,0,0.1)"}}>{size}</TableCell2>)
        } else if ( index > 0 && index % 2 === 0)
        {
          return (<TableCell2>{size}</TableCell2>)
        }
        return ( <TableCell2 style={{position: "sticky", zIndex: 100 , borderRight:"1px solid #000"}}>{size}</TableCell2>)
        }
      )}
      </TableRowBody>
    </div>
  )
}


export default CmTable;