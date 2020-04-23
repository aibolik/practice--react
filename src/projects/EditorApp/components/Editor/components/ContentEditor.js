import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

import Element from './Element';

import uuid from '../../../utils/uuid';

const PlaceHolder = styled.span`
  position: absolute;
  top: 0;
  color: rgb(137, 147, 164);
  width: 100%;
  pointer-events: none;
  display: block;
  user-select: none;
`;

const Content = styled.div`
  position: relative;
  min-height: 400px;

  font-size: 14px;
  outline: none;
`;

const ContentEditor = () => {
  const [content, setContent] = useState([]);
  const contentRef = useRef();

  const addElement = useCallback((index, initialContent = '', type = 'p') => {
    setContent([...content.slice(0, index + 1), { type, id: uuid(), initialContent, }, ...content.slice(index + 1)]);
  }, [content, setContent]);

  const handleClick = () => {
    if (content.length === 0) {
      setContent([{
        id: uuid(),
        type: 'p'
      }]);
    }
  };

  return (
    <Content onClick={handleClick} ref={contentRef}>
      {content.map(({ type, id, initialContent }, i) => (
        <Element type={type} key={id} addElement={addElement} initialContent={initialContent} index={i} />
      ))}
      
      {!content.length && <PlaceHolder>
        Hey! Feel free to type here whatever you want. If you want more elements, just type / and choose from the list
      </PlaceHolder>}
    </Content>
  );
}

export default ContentEditor;