import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>Home</h1>
      <p>
        This is home component and matched to route: {pathname}
      </p>
    </div>
  )
}

export default Home;