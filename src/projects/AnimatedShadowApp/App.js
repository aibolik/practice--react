import React, { useCallback } from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit:700,800&display=swap');

  body {
    font-family: 'Kanit', sans-serif;
    color: #fff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to top, #90a2b2 0%, #b0c0ce 100%);
`;

const Text = styled(animated.h1)`
  text-transform: uppercase;
  font-size: 64px;
  font-weight: 800;
  text-align: center;
  line-height: 0.8;
  transform: rotate(-12deg);

  text-shadow: 10px 10px 0 rgba(0, 0, 0, .24);

  span {
    color: #ffee58;
  }
`;

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function App() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const interpText = xy.interpolate((x, y) => {
    const res = `${Math.round(x.map(0, window.innerWidth / 2, 0, 16) * -1)}px ${Math.round(y.map(0, window.innerHeight / 2, 0, 16) * -1)}px 0 rgba(0, 0, 0, .24)`;
    return res;
  })
  
  const onMove = useCallback((e) => {
    let { clientX: x, clientY: y } = e
    set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] });
  }, []);

  return (
    <Wrapper onMouseMove={onMove}>
      <Normalize />
      <GlobalStyles />
      <Text style={{ textShadow: interpText }}>
        React is
        <br />
        <span>Awesome</span>
      </Text>
    </Wrapper>
  );
}

export default App;
