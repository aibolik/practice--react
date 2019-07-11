import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import UsersList from './components/UsersList';

const GITHUB_GET_ORG_MEMBERS_URL = org => `https://api.github.com/orgs/${org}/members`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
  }
`;

export const SearchContext = React.createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('facebook');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      try {
        const response = await fetch(GITHUB_GET_ORG_MEMBERS_URL(search));
        if (response.status < 200 || response.status >= 300) {
          throw new Error('Organization not found');
        }
        const users = await response.json();

        setLoading(false);
        setUsers(users);
      } catch(err) {
        setLoading(false);
        setError(err);
      }
    }

    fetchUsers();
  }, [search]);

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <SearchContext.Provider value={setSearch}>
        <Header />
      </SearchContext.Provider>
      <UsersList users={users} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
