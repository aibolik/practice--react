import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router'

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 16px;

  &[data-active] {
    background: white;
    border-radius: 8px 8px 0 0;
  }
`;

const isActive = ({ isCurrent }) => {
  return isCurrent ? { 'data-active': true } : null;
}

const NavTab = ({ to, children }) => {
  return (
    <StyledLink getProps={isActive} to={to}>{children}</StyledLink>
  );
};

export default NavTab;