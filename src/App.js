import React from 'react';
import Header from './components/Header';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import UsersList from './components/UsersList';

import useFetchMembers from './hooks/useFetchMembers';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
  }
`;

export const SearchContext = React.createContext();

function App() {
  const [{ users, isLoading, error }, setOrganization] = useFetchMembers('facebook');

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <SearchContext.Provider value={setOrganization}>
        <Header />
      </SearchContext.Provider>
      <UsersList users={users} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
