import React from 'react';
import {ButtonWrapper} from  './custom-button.style';

const CustomButton = ({children, ...otherProps}) => (

  <ButtonWrapper className='custom-button' {...otherProps}>
    {children}
  </ButtonWrapper>
)

export default CustomButton;