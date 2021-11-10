import {createSelector} from 'reselect';

// return cart object
const selectCart = state => state.cart;

// return the cart items array
export const selectCartItems = createSelector([selectCart],
  cart => cart.cartItems
)

// return the total quantity
export const selectCartItemsCount = createSelector([selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)