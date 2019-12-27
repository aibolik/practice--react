import React from 'react';
import styled from 'styled-components';
import icons from '@primer/octicons';

const Table = styled.table`
  width: 100%;
  border: 1px solid #dfe2e5;
  border-radius: 2px;
  border-collapse: collapse;
`;

const Item = styled.tr`
  display: flex;
  border-bottom: 1px solid #dfe2e5;
  
  td {
    color: #0366d6;
    padding-top: 6px;
    padding-bottom: 6px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }

    &:first-child {
      padding-left: 10px;
      margin-right: 6px;
    }
  }

  &:hover {
    background: #f6f8fa;
  }
`;

const getIcon = (item) => (
  <span style={{ fill: 'rgba(3,47,98,.55)' }} dangerouslySetInnerHTML={{ __html: item.type === 'file' ? icons.file.toSVG() : icons['file-directory'].toSVG() }} />
);

const Row = ({ item }) => {
  return (
    <Item>
      <td>{getIcon(item)}</td>
      <td>{item.name}</td>
    </Item>
  )
}

const ContentsTable = ({ contents }) => {

  const directories = contents.filter(c => c.type === 'dir');
  const files = contents.filter(c => c.type === 'file');

  return (
    <Table>
      <tbody>
        {[...directories, ...files].map(item => (
          <Row item={item} key={item.sha} />
        ))}
      </tbody>
    </Table>
  )
}

export default ContentsTable;