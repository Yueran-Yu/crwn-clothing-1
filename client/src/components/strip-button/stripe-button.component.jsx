import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IzZCdDoG3CMesjQ7WomYduwEK2eiGLEUVb5La2zJcDVccXUGgAMjXrs8RL9xVVXQnlSzHPyc8aQmk5y6sGgG9Jy003RDq1ORY'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful.')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert('There was an issue with your payment. Please make sure you use the provided credit card')
    })
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