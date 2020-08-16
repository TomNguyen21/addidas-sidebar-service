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


const InchTable = () => {
  const arr = ['Heel-toe measurement','8.7"','8.9"','9.0"', '9.2"','9.4', '9.5"', '9.7"', '9.8"', '10.0"', '10.2"', '10.4', '10.5','10.7', '10.9', '11.0', '11.2', '11.3', '11.5', '11.7', '11.9', '12.0', '12.2','12.4', '12.7', '13.0', '13.3','13.7', '14.0'];
  const arr2 = ['US - Mens','4','4.5','5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5','11','11.5','12','12.5','13','13.5','14','14.5','15','16','17','18','19','20'];
  const arr3 = ['US - Womens','5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5','11','11.5','12','12.5','13','13.5','14','14.5','15','15.5', '--', '--', '--', '--', '--', '--'];
  const arr4= ['UK','3.5','4','4.5','5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5','11','11.5','12','12.5','13','13.5','14','14.5','15','16','17','18','19'];
  const arr5= ['EU','36','36 2/3','37 1/3', '38', '38 2/3', '39 1/3', '40', '40 2/3', '41 1/3', '42', '42 2/3',' 43 1/3', '44','44 2/3', '45 1/3', '46', '46 2/3', '47 1/3', '48', '48 2/3', '49 1/3', '50', '50 2/3', '51 1/3', '52 2/3', '53 1/3','54 2/3', '55 2/3'];
  const arr6= ['JP','220','225','230', '235', '240', '245', '250', '255', '260', '265', '270', '275', '280', '285', '290', '295', '300', '305', '310', '315', '320', '325', '--', '--', '--', '--', '--', '--'];


  return (
    <div>
      <TableRowHead>
      {arr.map(function(size, index) {
        if (index > 0) return (<TableCell2 style={{backgroundColor: "#000", color: "#fff"}}>{size}</TableCell2>);
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

      <TableRowBody>
      {arr6.map(function(size, index) {
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


export default InchTable;