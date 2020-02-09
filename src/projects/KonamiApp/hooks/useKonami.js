import { useState, useRef, useCallback, useEffect } from 'react';

export default function useKonami(code) {
  const [guessed, setGuessed] = useState(false);

  const index = useRef(0);

  const reset = useCallback(() => {
    index.current = 0;
    setGuessed(0);
  }, [setGuessed]);

  const onKeyUp = useCallback(e => {
    const key = e.key;

    if (index.current === code.length - 1) {
      setGuessed(true);
    }
    if (key != null 
        && code[index.current] != null
        && key.toLowerCase() === code[index.current].toLowerCase()) {
      index.current = index.current + 1;
    } else {
      index.current = 0;
      setGuessed(false);
    }
  }, [code, setGuessed]);

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [code, onKeyUp]);

  return [guessed, reset];
}
