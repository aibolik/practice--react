import React from 'react';
import { Toggle } from 'react-toggle-component';
import useMode from '../hooks/useMode';



const ThemeSwitcher = () => {
  const { setMode, mode } = useMode();

  return (
    <div>
      <label htmlFor="theme-switcher">Dark mode</label>
      <Toggle name="theme-switcher" onToggle={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }} checked={mode === 'dark'} />
    </div>
  )
}

export default ThemeSwitcher;