import React from 'react';
import {  CartItemContainer, CartItemImage, ItemDetailsContainer, NameContainer} from './cart-item.styles'

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
