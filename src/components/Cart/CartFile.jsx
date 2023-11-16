import React, { useState } from 'react';
import Cart from './Cart'

function  CartFile() {
    const [cartItems, setCartItems] = useState([]);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
      };
    return (
        <div>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
    );
}

export default CartFile;
