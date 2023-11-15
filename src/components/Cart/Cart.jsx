import React, { useEffect } from 'react';

function Cart({cartItems = [], removeFromCart}) {
    useEffect(() => {
        console.log('Cart Items:', cartItems);
      }, [cartItems]);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}, Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        
      )}

    </div>
  );
}

export default Cart;
