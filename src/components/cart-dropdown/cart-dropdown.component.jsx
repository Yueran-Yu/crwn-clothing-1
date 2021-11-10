import React from 'react';
import CustomButton from "../custom-button/custom-button.compnent";
import './cart-dropdown.styles'
import {Wrapper} from "./cart-dropdown.styles";

export const CartDropdown = () => (
  <Wrapper>
    <div className='cart-items'>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </Wrapper>
)
