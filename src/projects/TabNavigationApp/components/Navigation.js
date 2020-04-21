import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const Tabs = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  border-bottom: 1px solid #b9b9b9;
`;

const Tab = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-right: 24px;

  color: #3f51b5;
  padding: 6px 12px;
`;

const ActiveLink = styled.span`
  display: none;
  border-bottom: 2px solid #4c5dbb;
  position: absolute;
  top: 0;

  transition: transform .3s;
`;

const Navigation = () => {
  const linkRef = useRef();

  const location = useLocation();

  useEffect(() => {
    const { current: bar } = linkRef;

    if (!bar) {
      return;
    }

    const parent = bar.parentElement;
    const activeLink = parent.querySelector('.active');

    const rect = activeLink.getBoundingClientRect();

    bar.style.width = `${rect.width}px`;
    bar.style.height = `${rect.height}px`;
    bar.style.transform = `translate(${rect.left - window.scrollX}px, ${rect.top - window.scrollY}px)`;
    bar.style.display = `inline-block`;
    
  }, [location]);

  return (
    <nav>
      {createPortal(
        <ActiveLink ref={linkRef} />,
        document.body,
      )}
      <Tabs>
        <li>
          <Tab to="/" activeClassName="active" exact>Home</Tab>
        </li>
        <li>
          <Tab to="/about" activeClassName="active">About</Tab>
        </li>
        <li>
          <Tab to="/team" activeClassName="active">Team</Tab>
        </li>
      </Tabs>
    </nav>
  );
}

export default Navigation;