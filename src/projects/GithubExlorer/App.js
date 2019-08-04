import React from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';

import Home from './components/Home';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Overview from './components/Overview';
import Issues from './components/Issues';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');

  body {
    font-family: 'Raleway', sans-serif;
    background: #EBEFF1;
  }
`;

const Wrapper = styled.div`
  margin: 60px auto;
  max-width: 650px;
`;

function App() {
  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Wrapper>
        <Router>
          <Home path="/" />
          <Repos path="repos" />
          <Repo path="repos/:slug/*" />
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
