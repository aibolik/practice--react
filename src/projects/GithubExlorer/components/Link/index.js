import styled from 'styled-components';
import { Link as _Link } from '@reach/router';

const Link = styled(_Link)`
  text-decoration: none;
  color: #558dc5;

  :hover {
    text-decoration: underline;
  }
`;

export default Link;