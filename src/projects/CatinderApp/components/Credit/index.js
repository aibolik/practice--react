import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 16px;

  p {
    background: #fff;
    margin: 0;
    padding: 16px;
    border-radius: 10px;
    color: rgba(0, 0, 0, .3);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    a {
      color: rgba(0, 0, 0, .7);
      text-decoration: none;
    }
  }
`;

const Credit = ({ authorUrl, author }) => {
  if (author) {
    return (
      <Wrapper>
        <p>Photo by <a href={authorUrl} target="_blank">{author}</a> from <a href="https://pexels.com" target="_blank">Pexels</a></p>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <p>Photo from <a href="https://pexels.com" target="_blank">Pexels</a></p>
      </Wrapper>
    );
  };
};

Credit.propTypes = {
  authorUrl: T.string,
  author: T.string,
};

export default Credit;