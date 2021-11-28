const existingCartItem = (original, target) => {
  return original.find(o => o.id === target.id)
}

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = existingCartItem(cartItems, cartItemToAdd)
  if (existingItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {
      ...cartItem,
      quantity: cartItem.quantity + 1
    } : cartItem)
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const clearItemFromCart = (cartItems, cartItemsToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = existingCartItem(cartItems, cartItemToRemove)
  if (existingItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove)
  }
  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {
    ...cartItem,
    quantity: cartItem.quantity - 1
  } : cartItem)
}