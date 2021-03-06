import React from 'react';
import { useSuspenseFetch as useFetch } from '../../../../hooks/useFetch';

import Wrapper from '../Wrapper';

const Issues = ({ issues_url }) => {
  const url = issues_url.replace(/{([^}]+)}/g, '');
  const issues = useFetch(url);

  return (
    <Wrapper>
      {issues.map(issue => (
        <p key={issue.id}>
          <a target="_blank" rel="noopener noreferrer" href={issue.html_url}>{issue.title}</a>
        </p>
      ))}
    </Wrapper>
  )
};

export default Issues;