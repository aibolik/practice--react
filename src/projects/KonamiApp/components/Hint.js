import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  left: 12px;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 0 0 8px;

  li {
    padding: 8px;
    margin-right: 8px;
    background: white;
    color: black;
    border-radius: 4px;
  }
`;


const KEY_MAPPING = {
  'ArrowUp': '↑',
  'ArrowDown': '↓',
  'ArrowLeft': '←',
  'ArrowRight': '→',
};


const Hint = ({ code }) => {

  return (
    <Wrapper>
      Hint:
      <List>
        {code.map((key, i) => (
          <li key={`${key}-${i}`}>
            {KEY_MAPPING[key] ? KEY_MAPPING[key] : key}
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

export default Hint;