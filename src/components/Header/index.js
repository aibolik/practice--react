import React from 'react';
import styled from 'styled-components';

import Search from '../Search';
import { ReactComponent as Logo } from '../../assets/svgs/github.svg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #24292e;
`;

const GitHubLogo = styled(Logo)`
  fill: white;
`;

const Header = props => (
  <HeaderWrapper>
    <GitHubLogo />
    <Search />
  </HeaderWrapper>
);

export default Header;