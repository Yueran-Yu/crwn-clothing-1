import React from 'react';
import './checkout-item.styles';
import {Wrapper} from "./checkout-item.styles";

 const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => (
  <Wrapper>
    <div className='image-container'>
      <img src={imageUrl} alt="item"/>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  </Wrapper>
)


export default CheckoutItem;