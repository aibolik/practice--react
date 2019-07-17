import React from 'react';
import styled from 'styled-components';

export const SimpleKey = styled.div`
  border-radius: 5px;
  border-bottom: 1px solid #b5b5b5;
  background: white;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:not(:last-child) {
    margin-right: 5px;
  }

  ${props => props.simple && `
    .uppercase-once &,
    .uppercase-always & {
      text-transform: uppercase;
    }
  `}

  &:active {
    background-color: #e4e4e4;
  }

  ${props => props.gray && `
    background-color: #adb5bb;
  `}

  ${props => props.return && `
    min-width: 110px;
  `}

  ${props => props.space && `
    min-width: 448px;
  `}
`;

const Key = ({ children: key, handleClick }) => {
  switch (key) {
    case 'backspace':
      return <SimpleKey gray onClick={e => handleClick(key)}>⌫</SimpleKey>
    case 'return':
      return <SimpleKey gray return onClick={e => handleClick(key)}>{key}</SimpleKey>
    case 'numeric':
      return <SimpleKey gray onClick={e => handleClick(key)}>.?123</SimpleKey>
    case 'alphabetic':
      return <SimpleKey gray onClick={e => handleClick(key)}>ABC</SimpleKey>
    case 'lang':
      return <SimpleKey gray onClick={e => handleClick(key)}>{`\u{1F1F5}\u{1F1F1}`}</SimpleKey>
    case 'space':
        return <SimpleKey space onClick={e => handleClick(key)}/>
    case 'layout':
      return <SimpleKey onClick={e => handleClick(key)}>{`\u{2328}`}</SimpleKey>
    default:
      return <SimpleKey simple onMouseDown={e => handleClick(key)}>{key}</SimpleKey>           
  }
}

export default Key;