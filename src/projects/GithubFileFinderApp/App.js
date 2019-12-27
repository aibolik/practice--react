import React, { useEffect, useState, useRef } from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import FilesTree from './components/FilesTree';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: #24292e;
  }
`;

function App() {

  return (
    <>
      <Normalize />
      <GlobalStyles />
      <FilesTree />
    </>
  );
}

export default App;
