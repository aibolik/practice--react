import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import TodoItem from '../TodoItem';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TodoList = ({ todos }) => (
  <List>
    {todos.map((item, index) => <TodoItem key={index} index={index} {...item} />)}
  </List>
);

TodoList.propTypes = {
  todos: T.array,
};

export default TodoList;