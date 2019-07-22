import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Logo from './assets/logo-hn-search.webp';

import Suggestions from './components/Suggestions';

import useFetch from '../../hooks/useFetch';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Merriweather:300,400&display=swap');

  body {
    font-family: Verdana,Geneva,sans-serif!important;
  }

  * {
    box-sizing: border-box;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  padding: 5px;
  background: #ff742b;

  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 70px;
`;

const Img = styled.img`
  vertical-align: middle;
`;

const Section = styled.section`
  padding-top: 10px;
  margin-top: 60px;
  font-size: 13px;
  background: #f6f6ef;
`;

const Input = styled.input`
  padding: 0 15px;
  line-height: 25px;
  height: 42px;
  color: #5c5c5c;
  border: none;
  font-weight: 100;
  flex: 1 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.24)
  }
`;

export const SearchContext = React.createContext('');

const HN_SEARCH_API = `http://hn.algolia.com/api/v1/search?query=`;

function App() {
  const [search, setSearch] = useState('');
  const [{ data, isLoading, error }, setSearchUrl] = useFetch(`${HN_SEARCH_API}${search}`);

  useEffect(() => {
    console.log(`setting search to ${search}`);
    setSearchUrl(`${HN_SEARCH_API}${search}`);
  }, [search]);

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <div>
        <Header>
          <LogoWrapper>
            <Img src={Logo} width="48" height="48" />
          </LogoWrapper>
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search stories by title, url or author" />
        </Header>
        <Section>
          <SearchContext.Provider value={search}>
            <Suggestions data={data} isLoading={isLoading} error={error} />
          </SearchContext.Provider>
        </Section>
      </div>
    </div>
  );
}

export default App;