import React, { useEffect } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { useToast } from '../ToastProvider';

const Wrapper = styled(animated.div)`
  margin-right: 16px;
  margin-top: 16px;
  width: 200px;

  position: relative;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0px 4px 10px 0px #d7d7d7;
  border: 1px solid #d7d7d7;
  color: #494E5C;
`;


const Toast = ({ children, id, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 2000);
    

    return () => {
      clearTimeout(timer);
    }
  }, [id, removeToast]);

  return (
    <Wrapper style={style}>
      {children}
    </Wrapper>
  );
}

export default Toast;