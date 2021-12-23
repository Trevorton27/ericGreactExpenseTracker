import React from 'react';
import TableRow from './TableRow';
import { Table } from 'react-bootstrap';

const CharacterTable = ({ characterList }) => {
  return (
    <Table
      className='mt-3'
      striped
      bordered
      hover
      variant='dark'
      id='table-container'
    >
      <thead className='table-head'>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <TableRow characterList={characterList} />;
      </tbody>
    </Table>
  );
};

export default CharacterTable;
