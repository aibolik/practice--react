import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const GenericElement = styled.span`
  outline: none;

  line-height: 1.714;
`;

const Element = ({ type, addElement, index, initialContent }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(ref.current, 0);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [ref]);

  const onKeyDown = useCallback(e => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const { anchorOffset: offset } = window.getSelection();

      const text = ref.current.innerHTML.slice(offset);
      ref.current.innerHTML = ref.current.innerHTML.slice(0, offset);

      addElement(index, text, type);
    }
  }, [addElement, index, type]);

  return (
    <GenericElement ref={ref} as={type} contentEditable onKeyDown={onKeyDown} dangerouslySetInnerHTML={{ __html: initialContent }} />
  );
}

export default Element;