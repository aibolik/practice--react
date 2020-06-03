import React from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

import Calculator from './components/Calculator';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

  body {
    font-family: 'Noto Sans', sans-serif;
  }
`;

const Wrapper = styled.div`
  padding: 54px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`;

function App() { 

  return (
    <Wrapper>
      <Normalize />
      <GlobalStyles />
      <Title>Calculate your expenses</Title>
      <Calculator />      
    </Wrapper>
  );
}

export default App;
