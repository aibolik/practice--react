import React from 'react';

import Item from '../SuggestionItem';

const Suggestions = ({ data, isLoading, error }) => {

  if (isLoading || error || !data) {
    return null;
  } 

  return (
    <div>
      {data.hits.filter(
        post => Boolean(post.title)
      ).map(
        post => <Item key={post.objectID} {...post} />
      )}
    </div>
  )
};

export default Suggestions;