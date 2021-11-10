import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {Wrapper} from "./cart-icon.styles";
import {connect} from 'react-redux';
import {toggleCart} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({itemCount, toggleCart}) => (
  <Wrapper>
    <ShoppingIcon className='shopping-icon' onClick={toggleCart}/>
    <span className='item-count'>{itemCount}</span>
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