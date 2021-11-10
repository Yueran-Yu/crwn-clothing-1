import React from 'react';
import CustomButton from "../custom-button/custom-button.compnent";
import './cart-dropdown.styles'
import {Wrapper} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartDropdown = ({cartItems}) => (
  <Wrapper>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </Wrapper>
)

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state)
  }
}

export default connect(mapStateToProps)(CartDropdown);
