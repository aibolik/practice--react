import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  padding: 16px 10px;
  border-bottom: 1px solid #e1e4e8;
`;

const ImageAnchor = styled.a`

`;

const Image = styled.img`

`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: space-between;
`;

const LoginAnchor = styled.a`
  color: #0366d6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SecondaryLinks = styled.div`
  color: #b8b8b8;
  font-size: 14px;
`

const SecondaryLink = styled.a`
  color: #b8b8b8;
`;

const UserComponent = ({ user: { avatar_url, html_url, login } }) => (
  <ListItem>
    <ImageAnchor href={html_url} target="_blank">
      <Image width="48" height="48" src={avatar_url} />
    </ImageAnchor>
    <UserInfo>
      <LoginAnchor href={html_url}>{login}</LoginAnchor>
      <SecondaryLinks>
        <SecondaryLink target="_blank" href={`https://github.com/${login}?tab=repositories`}>repos</SecondaryLink>
        {' • '}
        <SecondaryLink target="_blank" href={`https://gist.github.com/${login}/`}>gists</SecondaryLink>
        {' • '}
        <SecondaryLink target="_blank" href={`https://github.com/${login}?tab=stars`}>starred urls</SecondaryLink>
      </SecondaryLinks>
    </UserInfo>
  </ListItem>
);

UserComponent.propTypes = {
  user: T.object,
};

export default UserComponent;