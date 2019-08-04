import React from 'react';
import styled from 'styled-components';
import Back from '../Back';
import Link from '../Link';
import Wrapper from '../Wrapper';

const List = styled.ul`
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 8px;
  }
`;

const REPOS = [
  'react',
  'create-react-app',
  'react-native',
  'jest',
];

const Repos = () => {
  return (
    <>
      <h1><Back />Repositories</h1>
      <Wrapper>
        <List>
          {REPOS.map((repo, i) => (
            <li key={i}>
              <Link to={repo}>{repo}</Link>
            </li>
          ))}
        </List>
      </Wrapper>
    </>
  )
};

export default Repos;