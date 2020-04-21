import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Team from './components/Team';
import Navigation from './components/Navigation';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial;
  }
`;

const Wrapper = styled.div`
  padding: 24px;
  max-width: 500px;
`;

const App = () => {

  return (
    <Router>
      <GlobalStyles />
      <Normalize />
      <Wrapper>
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default App;