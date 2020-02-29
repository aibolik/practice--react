import React, { useState } from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeProvider from './components/ThemeProvider';
import Note from './components/Note';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
    color: ${props => props.theme.colors.font};
    background: ${props => props.theme.colors.bg};
  }
`;

export const ModeContext = React.createContext(null);

function App() {
  const [mode, setMode] = useState('light');

  return (
    <div>
      <ModeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider>
          <>
            <Normalize />
            <GlobalStyles />
            <Header>
              <Navigation />
              <ThemeSwitcher />
            </Header>
            <Hero />
            <Note />
          </>
        </ThemeProvider>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
