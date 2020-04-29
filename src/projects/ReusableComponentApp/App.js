import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Button from './components/Button';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const Wrapper = styled.div`
  padding: 32px;
`;

const Space = styled.div`
  display: inline-block;
  width: 80px;
`;

const App = () => {

  return (
    <>
      <GlobalStyles />
      <Normalize />
      <Wrapper>
        <h2>Sizes</h2>
        <div>
          <Button size="sm">Small</Button>
          <Space />
          <Button>Medium</Button>
          <Space />
          <Button size="lg">Large</Button>
        </div>
        <h2>Colors</h2>
        <div>
          <Button color="primary">Primary</Button>
          <Space />
          <Button color="secondary">Secondary</Button>
        </div>
        <h2>Variants</h2>
        <div>
          <h3>Contained</h3>
          <Button color="primary">Primary</Button>
          <Space />
          <Button color="secondary">Secondary</Button>
        </div>
        <div>
          <h3>Outlined</h3>
          <Button color="primary" variant="outlined">Primary</Button>
          <Space />
          <Button color="secondary" variant="outlined">Secondary</Button>
        </div>
      </Wrapper>
    </>
  )
}

export default App;