import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: inline-block;
  padding: 0 8px;
  border-radius: 3px;
  border-width: 0;

  line-height: 32px;
  color: #fff;
  background: rgb(0, 82, 204);
  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  outline: none;
  cursor: pointer;

  text-decoration: none;

  :hover {
    background: rgb(0, 101, 255);
  }
`;

const Wrapper = styled.div`
  padding: 24px;
`;

const Home = () => {
  
  return (
    <Wrapper>
      <Button to="/create">Create</Button>
    </Wrapper>
  );
}

export default Home;