import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {Wrapper} from "./cart-icon.styles";
import {connect} from 'react-redux';
import {toggleCart} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCart}) => (
  <Wrapper>
    <ShoppingIcon className='shopping-icon'  onClick={toggleCart}/>
    <span className='item-count'>0</span>
  </Wrapper>
)

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})
export default connect(null, mapDispatchToProps)(CartIcon);