import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/svgs/github.svg';

const HeaderWrapper = styled.div`
  padding: 16px;
  background: #24292e;
`;

const GitHubLogo = styled(Logo)`
  fill: white;
`;

const Header = props => (
  <HeaderWrapper>
    <GitHubLogo />
  </HeaderWrapper>
);

export default Header;