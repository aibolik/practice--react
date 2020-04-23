import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Editor from './components/Editor';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  }
`;


const App = () => {

  return (
    <Router>
      <GlobalStyles />
      <Normalize />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/create">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;