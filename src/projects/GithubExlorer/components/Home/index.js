import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import Wrapper from '../Wrapper';

const Home = () => {
  return (
    <>
      <h1>Welcome to GitHub explorer</h1>
      <Wrapper>
        <Link to="repos">repositories</Link>
      </Wrapper>
    </>
  )
};

export default Home;