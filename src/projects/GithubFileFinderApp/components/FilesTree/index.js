import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import FilesList from '../FilesList';
import { Router, navigate } from '@reach/router';
import icons from '@primer/octicons';
import FileFinder from '../FileFinder';

import useFetch from '../../../../hooks/useFetch';
import useKey from '../../../../hooks/useKey';

const GITHUB_REPO_CONTENT = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}/contents`;

const TitleWrapper = styled.div`
  display: flex;
  line-height: 1;
  align-items: center;
  margin-top: 16px;
`;

const RepoInfo = styled.h1`
  font-size: 18px;
  cursor: pointer;
  font-weight: normal;

  span {
    color: #0366d6;

    &:hover{
      text-decoration: underline;
    }
  }
`;

const FilesTree = () => {
  const ownerInput = useRef(null);
  const repoInput = useRef(null);
  const [owner, setOwner] = useState('juliuscc');
  const [repo, setRepo] = useState('semantic-release-slack-bot');
  const [isSubmitted, setSubmitted] = useState(false);
  const [{ data }, setUrl] = useFetch();
  useKey('T', () => {
    if ((ownerInput.current && ownerInput.current === document.activeElement) || 
        (repoInput.current && repoInput.current === document.activeElement)) {
      console.log('skip');
    } else {
      navigate('/find');
    }
  });

  useEffect(() => {
    if (isSubmitted) {
      setUrl(GITHUB_REPO_CONTENT(owner, repo));
      setSubmitted(false);
    }
  }, [isSubmitted, setSubmitted, owner, repo, setUrl]);

  return (
    <>
      <div style={{ padding: '16px 32px 0' }}>
        <form onSubmit={e => {
          e.preventDefault();
          setSubmitted(true);
        }}>
          <h3>Set owner of repo and repository:</h3>
          <label>
            Owner:
            <input value={owner} ref={ownerInput} onChange={e => setOwner(e.target.value)} />
          </label>
          {` `}
          <label>
            Repo:
            <input value={repo} ref={repoInput} onChange={e => setRepo(e.target.value)} />
          </label>
          {` `}
          <button type="submit">Set repository</button>
        </form>
        {data && <TitleWrapper>
          <span style={{ fill: '#959da5', marginRight: '8px' }} dangerouslySetInnerHTML={{ __html: icons.repo.toSVG()}} />
          <RepoInfo>
            <span>{owner}</span>
            {` / `}
            <span><strong>{repo}</strong></span>
          </RepoInfo>
        </TitleWrapper>}
      </div>
      <Router>
        <FilesList path="/" contents={data} />
        <FileFinder path="/find" owner={owner} repo={repo} />
      </Router>
    </>
  );
}

export default FilesTree;
