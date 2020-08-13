import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
  display: block;
  color: #000;
  font-weight: 400;
  font-style: normal;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  background-color: #fff;
  overflow: auto;
`;

const TableInner = styled.div`
  min-width: 100%;
  width: max-content;
  height: max-content;
`;

const TableRow = styled.div`
  align-items: stretch;
  display: flex;
  width: max-content;
  min-width: 100%;

`;

const TableCell = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: #000;
  border-right: 1px solid #000;
  color: #fff;
  display: flex;
  font-size: 14px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 700;
  left: 0;
  min-height: 50px;
  position: sticky;
  padding: 10px;
  width: 130px;
  // z-index: 1;
`;

const TableCell2 = styled.div`
  align-items: center;
  box-sizing: border-box;
  border-right: 1px solid #000;
  color: #000;
  display: flex;
  font-size: 14px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  left: 0;
  min-height: 50px;
  position: sticky;
  padding: 10px;
  width: 130px;
`;

const SizeTable = () => {

  const arr = ['Heel-toe measurement','8.7"','8.9"','9.0"', '9.2"', '9.5"', '9.7"', '9.8"', '10.0"', '10.2"'];
  const arr2 = ['US - Mens','4','4.5','5', '5.5', '6', '6.5', '7', '7.5', '8'];
  const arr3 = ['US - Womens','4','4.5','5', '5.5', '6', '6.5', '7', '7.5', '8'];

  return (
    <Table>
      <TableInner>
        <TableRow>
        {arr.map(size =>
          <TableCell>
            <div key={size}>{size}</div>
          </TableCell>
        )}
        </TableRow>

        <TableRow>
        {arr2.map(size =>
          <TableCell2>
            <div key={size}>{size}</div>
          </TableCell2>
        )}
        </TableRow>

        <TableRow>
        {arr3.map(size =>
          <TableCell2>
            <div key={size}>{size}</div>
          </TableCell2>
        )}
        </TableRow>

      </TableInner>
    </Table>
  )
}




export default SizeTable;