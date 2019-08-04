import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 8px;
`;

const Back = () => {
  return (
    <StyledLink to="../">{`\u{2B05}`}</StyledLink>
  )
};



export default Back;