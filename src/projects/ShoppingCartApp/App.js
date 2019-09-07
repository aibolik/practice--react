import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';

import Home from './components/Home';
import Item from './components/Item';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:500,600,700&display=swap');

  body {
    font-family: 'Raleway', sans-serif;
    color: #3A3038;
  }
`;

function App() {

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Router>
        <Home path="/" />
        <Item path="/item" />
      </Router>
    </div>
  );
}

export default App;
