import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';

import NavTab from '../NavTab';
import Overview from '../Overview';
import Issues from '../Issues';
import Back from '../Back';

import useFetch from '../../../../hooks/useFetch';

const Tabs = styled.ul`
  padding: 0 0 0 8px;
  margin: 0;
  display: flex;
  justify-content: flex-start;
`;

const Badge = styled.span`
  padding: 0 6px;
  background: #bdd;
  border-radius: 8px;
  margin-left: 6px;
`;

const Repo = ({ slug, children }) => {
  const [{ data, isLoading, error }] = useFetch(`https://api.github.com/repos/facebook/${slug}`);

  if (!data || isLoading || error) {
    return null;
  }

  const { open_issues_count: issues } = data;

  return (
    <>
      <h1><Back />{slug}</h1>
      <Tabs>
        <NavTab to="./">Overview</NavTab>
        <NavTab to="issues">Issues<Badge>{issues}</Badge></NavTab>
      </Tabs>
      <Router>
        <Overview path="/" {...data} />
        <Issues path="issues" {...data} />
      </Router>
    </>
  );
};

export default Repo;