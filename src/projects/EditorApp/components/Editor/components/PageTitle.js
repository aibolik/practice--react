import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 28px;
  line-height: 1.25;
  border: none;
  text-overflow: ellipsis;
  resize: none;
  overflow: hidden;
  padding: 0;
  white-space: pre-wrap;
  box-sizing: border-box;
  color: #172b4d;
  outline: none;
  margin-bottom: 30px;

  ::-webkit-input-placeholder {
    color: rgb(137,147,164);
  }
  :-moz-placeholder {
    color: rgb(137,147,164);
  }
  ::-moz-placeholder {
    color: rgb(137,147,164);
  }
  :-ms-input-placeholder {
    color: rgb(137,147,164);
  }
`;

const PageTitle = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  return (
    <TextArea onChange={handleChange} value={title} placeholder="Page title" rows="1" />
  );
}

export default PageTitle;