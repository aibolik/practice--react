import { useContext } from 'react';
import { ModeContext } from '../App'

function useMode() {
  const { setMode, mode } = useContext(ModeContext);

  return { setMode, mode };
}

export default useMode;