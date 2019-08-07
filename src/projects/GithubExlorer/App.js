import React from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';

import Loading from './components/Loading';

const Home = React.lazy(() => import('./components/Home'));
const Repos = React.lazy(() => import('./components/Repos'));
const Repo = React.lazy(() => import('./components/Repo'));

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
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Home path="/" />
            <Repos path="repos" />
            <Repo path="repos/:slug/*" />
          </Router>
        </React.Suspense>
      </Wrapper>
    </div>
  );
}

export default App;
