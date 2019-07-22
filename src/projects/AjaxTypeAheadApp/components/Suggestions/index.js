import React, { useContext } from 'react';
import styled from 'styled-components';

import Item from '../SuggestionItem';
import { SearchContext } from '../../App';

const Wrapper = styled.div`
  
`;


const Suggestions = ({ data, isLoading, error }) => {
  const search = useContext(SearchContext);

  if (isLoading || error || !data) {
    return null;
  } 

  return (
    <Wrapper>
      {data.hits.filter(
        post => Boolean(post.title)
      ).map(
        post => <Item key={post.objectID} {...post} />
      )}
    </Wrapper>
  )
};

export default Suggestions;