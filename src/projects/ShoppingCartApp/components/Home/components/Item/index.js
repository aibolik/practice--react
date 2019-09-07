import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Wrapper = styled(Link)`
  margin-right: 80px;
  margin-bottom: 20px;
  color: inherit;
  text-decoration: none;
`;

const Img = styled.img`
  width: 235px;
  height: 200px;
  object-fit: cover;
`;

const Name = styled.h4`
  font-size: 26px;
  line-height: 30px;
  margin: 8px 0;
`;

const Price = styled.h5`
  font-size: 18px;
  margin: 0;
`;


const Item = ({ id, image, price, name }) => {
  return (
    <Wrapper to={`item/${id}`}>
      <Img src={`/dishes/${image}`} alt={name} />
      <Name>{name}</Name>
      <Price>${price}</Price>
    </Wrapper>
  );
}

export default Item