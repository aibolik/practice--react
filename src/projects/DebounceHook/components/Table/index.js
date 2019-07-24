import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 28px;

  table {
    border-collapse: collapse;
  }
  
  table, th, td {
    border: 1px solid black;
  }

  th, td {
    padding: 6px 12px;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 28px;
`;

const Data = styled.div`
  border-radius: 12px;
  background: white;
  padding: 24px 16px;
`;

let rerender = 0;

const Table = ({ data }) => {
  rerender++;

  return (
    <Wrapper>
      <DataWrapper>
      <Data>
        Number of items: <strong>{data.length}</strong>
      </Data>
      <Data>
      Number of re-renders: <strong>{rerender}</strong>
      </Data>
      </DataWrapper>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Eye color</th>
            <th>Age</th>
          </tr>
          {data.map(row => (
            <tr key={row._id}>
              <td>{row.name.first} {row.name.last}</td>
              <td>{row.email}</td>
              <td>{row.eyeColor}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  )
};

Table.propTypes = {
  data: T.array,
}

export default Table;