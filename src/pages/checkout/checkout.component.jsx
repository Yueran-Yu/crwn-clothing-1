import React from 'react';
import './checkout.styles';
import {Wrapper} from "./checkout.styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems, total}) => (
  <Wrapper>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
    }
    <div className='total'>TOTAL: <span> ${total}</span></div>
  </Wrapper>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);


