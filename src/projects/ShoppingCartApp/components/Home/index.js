import React from 'react';
import { Wrapper, Items } from './styled';

import Header from '../Header';
import CartLink from '../CartLink';
import Item from './components/Item';

import data from '../../data';

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <h1>My Shop</h1>
        <CartLink />
      </Header>
      <Items>
        {data.items.map(item => <Item key={item.id} {...item} />)}
      </Items>
    </Wrapper>
  );
};

export default Home;