import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex: 1 1 0;

  li {
    margin-right: 24px

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Navigation = () => {


  return (
    <List>
      <li>Home</li>
      <li>About</li>

    </List>
  );
}

export default Navigation;