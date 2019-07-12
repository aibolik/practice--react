import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { SearchContext } from '../../App';

const Input = styled.input`
  width: 145px;
  height: 100%;
  background: hsla(0,0%,100%,.125);
  border-radius: 3px;
  border: 0;
  font-size: 12px;
  padding: 0 8px;
  transition: width .3s;
  color: white;

  &:focus {
    background: white;
    width: 190px;
    outline: none;
    color: black;
  }
`;

const Search = () => {
  const [value, setValue] = useState('');
  const setSearch = useContext(SearchContext);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setSearch(value);
      setValue('');
    }}>
      <Input placeholder="Search for organizations" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
};

export default Search;