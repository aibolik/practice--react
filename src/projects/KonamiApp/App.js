import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import MortalKombatFontTTF from './assets/mortalkombat3.ttf';
import backgroundImg from './assets/mk3.png';
import Menu from './components/Menu';
import Hint from './components/Hint';

import useKonami from './hooks/useKonami';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: MortalKombat;
    src: url(${MortalKombatFontTTF});
  }

  body {
    font-family: MortalKombat, Arial;
    color: white;
  }
`;

const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  text-align: center;
`;

// Credits for image:
// https://www.reddit.com/r/MortalKombat/comments/d5qzl2/fanmade_4k_mk3_wallpaper_made_with_separate_mk3/
// user: u/lightsource33


// Credits for fonts:
// http://mortalkombatwarehouse.com/site/fonts/#mk3


const App = () => {
  const code = [
    'B', 'A', 'ArrowDown', 'ArrowLeft', 'A', 'ArrowDown', 
    'C', 'ArrowRight', 'ArrowUp', 'ArrowDown'
  ];
  const [guessed] = useKonami(code);

  return (
    <>
      <GlobalStyles />
      <Normalize />
      <Wrapper>
        <img src={backgroundImg} alt="Mortal Kombat 3 Ultimate" />
        <Menu showHiddenMenu={guessed} />
        <Hint code={code} />
      </Wrapper>
    </>
  )
}

export default App;