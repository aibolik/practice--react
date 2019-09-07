import React from 'react';
import { ReactComponent as CartIcon } from './shopping-cart.svg';
import { Link } from '@reach/router';


const CartLink = () => {

  return (
    <Link to='/cart'>
      <CartIcon />
    </Link>
  );
}

export default CartLink;