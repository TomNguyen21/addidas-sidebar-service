import React from 'react';
import styled from 'styled-components';
import InchTable from './InchTable.jsx'

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


const SizeTable = () => {

  return (
    <Table>
      <TableInner>
        <InchTable />
      </TableInner>
    </Table>
  )
}




export default SizeTable;