import React from 'react';
import useMode from '../hooks/useMode';

const Note = () => {
  const { mode } = useMode();

  return (
    <div>
      Current mode is: {mode}.
    </div>
  )
}

export default Note;