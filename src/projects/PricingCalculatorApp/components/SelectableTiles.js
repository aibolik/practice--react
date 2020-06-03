import React from 'react';
import styled from 'styled-components';

const Tile = styled.label`
  position: relative;
  padding: 24px 12px;
  margin-right: 8px;
  font-size: 18px;
  border-radius: 4px;
  white-space: nowrap;

  background: #C4B8FE;

  
  user-select: none;

  transition: .3s color, .3s background;

  ${props => props.checked && `
    background: #1121EC;
    color: white;
    box-shadow: 0 0px 12px 2px #8c93ea;
  `};

  input {
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    margin-top: -24px;
    margin-left: -24px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-self: center;
`;

const SelectableTiles = ({ name, options, selectedValue, handleChange }) => {


  return (
    <Wrapper>
      {options.map(({ value, text }) => (
        <Tile key={value} checked={selectedValue === value}>
          <input type="radio" name={name} value={value} onChange={handleChange} />
          {text}
        </Tile>
      ))}
    </Wrapper>
  );
}

export default SelectableTiles;