import { useMemo, useEffect } from 'react';

export default function useKey(key, handler) {
  const useMemoHandler = useMemo(() => (e) => {
    if(e.key.toLowerCase() === key.toLowerCase()) {
      handler(e);
    }
  }, [key, handler]);

  useEffect(() => {
    window.addEventListener('keydown', useMemoHandler);
    return () => {
      window.removeEventListener('keydown', useMemoHandler);
    }
  }, [useMemoHandler]);
}