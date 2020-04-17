import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>About</h1>
      <p>
        This is About component and matched to route: {pathname}
      </p>
    </div>
  )
}

export default About;