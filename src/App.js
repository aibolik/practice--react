import React from 'react';
import Header from './components/Header';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import UsersList from './components/UsersList';

import useFetch from './hooks/useFetch';

export const GITHUB_GET_ORG_MEMBERS_URL = org => `https://api.github.com/orgs/${org}/members`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
  }
`;

export const SearchContext = React.createContext();

function App() {
  const [{ data: users, isLoading, error }, setSearchUrl] = useFetch(GITHUB_GET_ORG_MEMBERS_URL('facebook'));

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <SearchContext.Provider value={setSearchUrl}>
        <Header />
      </SearchContext.Provider>
      <UsersList users={users} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
