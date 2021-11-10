import React from 'react';
import {ButtonWrapper} from './custom-button.style';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (

  <ButtonWrapper
    className={`${inverted ? 'inverted' : ''}   ${isGoogleSignIn ? 'google-sign-in' : ''}   custom-button`} {...otherProps}>
    {children}
  </ButtonWrapper>
)

export default CustomButton;