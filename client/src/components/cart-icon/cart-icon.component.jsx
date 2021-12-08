import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_cart.svg';
import {Wrapper} from "./cart-icon.styles";
import {connect} from 'react-redux';
import {toggleCart} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({itemCount, toggleCart}) => (
  <Wrapper>
    <ShoppingIcon className='shopping-icon' onClick={toggleCart}/>
    <div className='item-count'>{itemCount}</div>
  </Wrapper>
)

// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);