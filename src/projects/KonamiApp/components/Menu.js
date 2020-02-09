import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const MenuItem = styled(animated.h4)`
  text-transform: uppercase;
  font-style: italic;
  font-size: 30px;
  margin: 0px 0;
  -webkit-font-smoothing: none;
  letter-spacing: 6px;
  position: relative;

  :first-child {
    color: #F0E801;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const defaultItems = [
  "Start",
  "Options",
];

const hiddenItems = [
  "Secrets",
  "Cheats Option",
  "Endurance Match",
];

const Menu = ({ showHiddenMenu }) => {
  const items = showHiddenMenu 
    ? [...defaultItems, ...hiddenItems]
    : defaultItems;

  const transitions = useTransition(items, item => item, {
    trail: 500,
    from: { top: '50vh' },
    enter: { top: '0' },
  });
  
  return (
    <List>
      {transitions.map(({ item, key, props }) => (
        <MenuItem style={props} key={key}>{item}</MenuItem>
      ))}
    </List>
  );
}

Menu.defaultProps = {
  showHiddenMenu: false,
};

export default Menu;