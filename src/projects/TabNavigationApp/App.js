import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Team from './components/Team';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial;
  }
`;

const Wrapper = styled.div`
  padding: 24px;
  max-width: 500px;
`;

const Tabs = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  border-bottom: 1px solid #b9b9b9;
`;

const Tab = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-right: 24px;

  color: #3f51b5;
  padding: 6px 12px;

  &.active {
    border-bottom: 2px solid #4c5dbb;
  }
`;


const App = () => {

  return (
    <Router>
      <GlobalStyles />
      <Normalize />
      <Wrapper>
        <nav>
          <Tabs>
            <li>
              <Tab to="/" activeClassName="active" exact>Home</Tab>
            </li>
            <li>
              <Tab to="/about" activeClassName="active">About</Tab>
            </li>
            <li>
              <Tab to="/team" activeClassName="active">Team</Tab>
            </li>
          </Tabs>
        </nav>
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