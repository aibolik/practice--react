import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Calculator from './components/Calculator';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial;
  }
`;

const Wrapper = styled.div`
  background: #222332;
  height: 100vh;
  width: 100%;
`;

const App = () => {

  return (
    <>
      <GlobalStyles />
      <Normalize />
      <Wrapper>
        <Calculator />
      </Wrapper>
    </>
  )
}

export default App;