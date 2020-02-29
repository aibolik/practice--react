import React from 'react';
import { ThemeProvider } from 'styled-components';

import useMode from '../hooks/useMode';
import theme from '../theme';

const Provider = ({ children }) => {
  const { mode } = useMode();

  return (
    <ThemeProvider theme={{
      ...theme,
      colors: { ...theme.colors[mode] },
    }}>
      {children}
    </ThemeProvider>
  );
}

export default Provider;