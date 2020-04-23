import React from 'react';
import styled from 'styled-components';
import PageTitle from './components/PageTitle';
import ContentEditor from './components/ContentEditor';

const Wrapper = styled.div`
  padding: 56px 32px;
`;

const Editor = () => {

  return (
    <Wrapper>
      <PageTitle />
      <ContentEditor />
    </Wrapper>
  );
}

export default Editor;