import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  padding: 3px 15px 10px;
  text-align: left;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: solid 1px #eee;
`;

const Heading = styled.h2`
  font-size: inherit;
  margin-top: 0;
  margin-bottom: 4px;
`;

const Anchor = styled.a`
  color: #000;
  text-decoration: none;
  
  font-weight: 100;

  &:visited {
    color: #9c9c9c;
  }
`;

const Properties = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;

  li {
    padding-left: 5px;
    padding-right: 3px;
    margin-right: 2px;
    border-left: 1px solid #cfcfcf;

    &:first-child {
      border-left: none;
      padding-left: 0;
    }

    a {
      font-size: 10px;
      color: dimgray;
      text-decoration: none;

      &:hover {
        border-bottom: dotted 1px #ccc;
      }
    }
  }
`;

const Item = ({ title, points, url, author, created_at: createdAt, num_comments: commentsCount, objectID }) => {

  return (
    <Wrapper>
      <Heading>
        <Anchor href={url} target="_blank">{title}</Anchor>
      </Heading>
      <Properties>
        <li>
          <a href={`https://news.ycombinator.com/item?=${objectID}`}>{points} points</a>
        </li>
        <li>
          <a href={`https://news.ycombinator.com/user?=${author}`}>{author}</a>
        </li>
        <li>
          <a href={`https://news.ycombinator.com/item?=${objectID}`}>{moment(createdAt).fromNow()}</a>
        </li>
        <li>
          <a href={`https://news.ycombinator.com/item?=${objectID}`}>{commentsCount} comments</a>
        </li>
        <li>
          <a href={url}>({url})</a>
        </li>

      </Properties>
      {/* <span>{numberWithCommas(popPropertiesation)}</span> */}
    </Wrapper>
  )
};

export default Item;