import React, { useState } from 'react';
import styled from 'styled-components';
import ContentsTable from '../ContentsTable';
import { navigate } from '@reach/router';

import useFetch from '../../../../hooks/useFetch';
import useKey from '../../../../hooks/useKey';

const Wrapper = styled.div`
  margin-top: 16px;
  padding: 0 32px;
`;

const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: #24292e;
`;

const NoResult = styled.h3`
  padding: 32px;
  text-align: center;
`;

const typeMap = {
  'blob': 'file',
}

const FileFinder = ({ owner, repo }) => {
  let url;
  if (owner && repo) {
    url = `https://api.github.com/repos/${owner}/${repo}/git/trees/master?recursive=1`;
  }
  const [name, setName] = useState('');
  const [{ data, error, isLoading }] = useFetch(url);
  useKey('Escape', () => {
    navigate('../');
  });


  if (!data || error || isLoading) {
    return null;
  }

  const contents = data.tree
    .filter(item => item.type === 'blob')
    .map(item => ({
      ...item,
    name: item.path,
    type: typeMap[item.type],
    }))
    .filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);

  return(
    <Wrapper>
      <SearchWrapper>
        <span style={{ color: '#0366d6'}}>{repo}</span>
        &nbsp;/&nbsp;
        <Input value={name} onChange={e => setName(e.target.value)} />
      </SearchWrapper>
      <ContentsTable contents={contents} />
      {!contents.length && <NoResult>
        No matching files found.
      </NoResult>
      }
    </Wrapper>
  );
}

export default FileFinder;