import React, { useContext } from 'react';
import styled from 'styled-components';

import { TodosContext } from '../../App';

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  font-size: 24px;
  font-weight: 100;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  width: 40px;
  font-size: 20px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #af5b5e;
  font-weight: 100;

  ::after {
    content: '×';
  }
`;

const TodoItem = ({ text, index }) => {
  const { dispatch } = useContext(TodosContext);
 
  const onDelete = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index })
  }

  return (
    <Wrapper>
      <div>{text}</div>
      <DeleteButton onClick={e => onDelete(index)} />
    </Wrapper>
  );
};

export default TodoItem;