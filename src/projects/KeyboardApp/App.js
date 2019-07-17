import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Key, { SimpleKey } from './components/Key';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: arial;
    text-align: center;
  }
`;

const Layout = styled.div`
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 5px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Textarea = styled.textarea`
  display: block;
  margin: 16px auto;
  min-width: 400px;
  min-height: 100px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 6px;
  padding: 8px;
  caret-color: #4e88e5;
`;

const ShiftKey = styled(SimpleKey)`
  .uppercase-once &,
  .uppercase-always & {
    color: #4e88e5;
  }
`;

const keys = {
  alphabetic: [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "backspace"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "return"],
    ["z", "x", "c", "v", "b", "n", "m", ",", "."],
    ["numeric", "lang", "space", "numeric", "layout"],
  ],
  numeric: [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace"],
    ["@", "#", "$", "&", "*", "(", ")", "'", "\"", "return"],
    ["%", "-", "+", "=", "/", ";", ":", "!", "?"],
    ["alphabetic", "lang", "space", "alphabetic", "layout"],
  ]
};

function App() {
  const [currentKeys, changeKeyboard] = useState('alphabetic');
  // lowercase, uppercase-once, uppercase-always
  const [shiftState, changeShift] = useState('lowercase')
  const [input, changeInput] = useState('');

  const handleClick = (key) => {
    switch(key) {
      case 'numeric':
        changeKeyboard('numeric');
        break;
      case 'alphabetic':
        changeKeyboard('alphabetic');
        break;
      case 'shift':
        changeShift(prevShift => {
          if (prevShift === 'lowercase') {
            return 'uppercase-once';
          } else {
            return 'lowercase';
          }
        });
        break;
      case 'return':
        changeInput(input + '\n');
        break;
      case 'space':
        changeInput(input + ' ');
        break;
      case 'backspace':
        changeInput(input.slice(0, input.length - 1));
        break;
      case 'lang':
      case 'layout':
        break;
      default:
        if (shiftState.indexOf('uppercase') >= 0) {
          changeInput(input + key.toUpperCase());
          if (shiftState === 'uppercase-once') {
            changeShift('lowercase');
          }
        } else {
          changeInput(input + key);
        }
        break;
    }
  }

  const shiftDoubleClick = () => {
    if (shiftState === 'lowercase' || shiftState === 'uppercase-once') {
      changeShift('uppercase-always');
    }
  }

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Textarea value={input} onChange={e => changeInput(e.target.value)} />
      <Layout className={shiftState}>
        {keys[currentKeys].map((row, i) => (
          <Row key={i}>
            {i === 2 && <ShiftKey key="shift-left" onDoubleClick={shiftDoubleClick} onClick={e => handleClick('shift')}>⇧</ShiftKey>}
            {row.map((key, i) => {
              return <Key key={`${key}-${i}`} handleClick={handleClick}>{key}</Key>;
            })}
            {i === 2 && <ShiftKey key="shift-right" onDoubleClick={shiftDoubleClick} onClick={e => handleClick('shift')}>⇧</ShiftKey>}
          </Row>
        ))}
      </Layout>
    </div>
  );
}

export default App;