import React, { useState, useCallback } from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

import Card from './components/Card';

import catsArray from './assets/cats';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit:400,700,800&display=swap');

  body {
    font-family: 'Kanit', sans-serif;
    background: linear-gradient(to top,#9facb7 0%,#526a7f 100%) no-repeat;
    background-size: 100vw 120vh;
  }

  * {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  color: #ffee58;
  text-shadow: 5px 5px 0 rgba(0, 0, 0, .24);
`;

function App() {
  const [cats, setCats] = useState(catsArray);

  const submit = useCallback(() => {
    setCats([...cats.slice(1)]);
  }, [cats, setCats]);

  const restart = useCallback(() => {
    setCats(catsArray);
  }, [setCats]);

  const shownCats = cats.slice(0, 3);

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Title>CaTinder</Title>
      <Wrapper>
        {shownCats.map((cat, index) => <Card {...cat} submit={submit} key={`${index}-${cat.id}`} index={index + 1} />)}
        {!cats.length && <button onClick={e => restart()}>Restart</button>}
      </Wrapper>
    </div>
  );
}

export default App;
