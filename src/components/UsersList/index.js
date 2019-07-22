import React from 'react';
import styled from 'styled-components';

import UserComponent from '../UserComponent';
import Spinner from '../Spinner';

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const EmptyBlock = styled.p`
  text-align: center;
`;

const Users = ({ users, isLoading, error }) => {
  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <EmptyBlock>Error: {error.message}</EmptyBlock>
  }

  if (!Boolean(users) || users.length === 0) {
    return <EmptyBlock>There is no users :(</EmptyBlock>
  }
  
  return (
    <List>
      {users.map(user => <UserComponent key={user.id} user={user} />)}
    </List>
  )
}

export default Users;