import React from 'react';
import CustomButton from "../custom-button/custom-button.compnent";
import './cart-dropdown.styles'
import {Wrapper} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import {useDispatch, useSelector} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { useHistory} from "react-router-dom";
import {toggleCart} from '../../redux/cart/cart.actions';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='cart-items'>
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>) :
            <span className='empty-message'>Your Cart is empty</span>
        }
      </div>
      <CustomButton inverted onClick={
        () => {
          history.push(`/checkout`)
          dispatch(toggleCart())
        }

      }>GO TO CHECKOUT</CustomButton>
    </Wrapper>
  )
}

export default CartDropdown;
