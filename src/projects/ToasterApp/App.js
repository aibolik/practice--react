import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import ToastProvider from './components/ToastProvider';
import Example from './components/Example';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
    color: #494E5C;
  }
`;


function App() {
  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <ToastProvider>
        <Example />
      </ToastProvider>
    </div>
  );
}

export default App;
