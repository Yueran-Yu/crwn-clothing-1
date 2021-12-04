import React from 'react';
import './checkout.styles';
import {CheckoutHeader, HeaderBlock, TestWarning, Total, Wrapper} from "./checkout.styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/strip-button/stripe-button.component";

const CheckoutPage = ({cartItems, total}) => (
  <Wrapper>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
    }
    <Total>TOTAL: <span> ${total}</span></Total>
    <TestWarning>
      ★ Please use the following test credit card for payment ★
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - CVV:123
    </TestWarning>
    <StripeCheckoutButton price={total}/>
  </Wrapper>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);


