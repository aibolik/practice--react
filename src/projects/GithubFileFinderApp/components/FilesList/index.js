import React from 'react';
import styled from 'styled-components';
import ContentsTable from '../ContentsTable';

const Wrapper = styled.div`
  padding: 16px 32px;
`;

const FilesList = ({ contents }) => {

  if (!contents) {
    return null;
  }

  return (
    <Wrapper>
      <ContentsTable contents={contents} />
    </Wrapper>
  )
}

export default FilesList;