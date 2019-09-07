import React from 'react';

import { Wrapper, Content, Img, Price, Button } from './styled';
import Header from '../Header';
import CartLink from '../CartLink';


const Item = () => {

  return (
    <Wrapper>
      <Header>
        <h1>Breakfast Bowl</h1>
        <CartLink />
      </Header>
      <Content>
        <Img src="dishes/1109197.jpg" />
        <div>
          <Price>Price: $7.9</Price>
          <Button>Add to cart</Button>
        </div>
      </Content>
    </Wrapper>
  )
}

export default Item;