import React from 'react';
import Header from './components/Header';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import UserComponent from './components/UserComponent';

import users from './mockData/users.json';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
  }
`

function App() {
  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Header />
      <>
        <UserComponent user={users[0]} />
        <UserComponent user={users[1]} />
      </>
    </div>
  );
}

export default App;
