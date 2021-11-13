import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IzZCdDoG3CMesjQ7WomYduwEK2eiGLEUVb5La2zJcDVccXUGgAMjXrs8RL9xVVXQnlSzHPyc8aQmk5y6sGgG9Jy003RDq1ORY'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }
  return <StripeCheckout
    currency="CAD"
    label='Pay Now'
    name='Shopping Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://images.squarespace-cdn.com/content/v1/546e2462e4b0dc2d9c006889/1521551969513-VIJG03MGPVC4TYV1DISA/crown+logo+bw+2-01.png?format=1000w'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
}

export default StripeCheckoutButton;