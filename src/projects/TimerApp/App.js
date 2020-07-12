import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Timer from './components/Timer';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@0,300;0,600;1,400&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Wrapper = styled.div`
  background: #0F2E4B;
  color: #FFF;
  height: 100vh;
`;

const App = () => {

  return (
    <>
      <GlobalStyles />
      <Normalize />
      <Wrapper>
        <Timer />
      </Wrapper>
    </>
  )
}

export default App;