import React, { useState } from 'react';

import { useToast } from '../ToastProvider';

const Example = () => {
  const [input, setInput] = useState('');
  const { addToast } = useToast();

  return (
    <div style={{ padding: '24px' }}>
      <p>This is an example of using toast</p>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        if (input) {
          addToast(input);
          setInput('');
        }
      }}>Add toast</button>
    </div>
  )
}

export default Example;