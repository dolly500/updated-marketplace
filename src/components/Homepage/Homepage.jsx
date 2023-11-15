import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import Cart from '../Cart/Cart';

function Homepage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cartItems, setCartItems] = useState([]);


    const addtocart = (product) => {
    
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }

    console.log('Product added to cart:', product);
    
      }

    return (
        <div>
            <Categories searchTerm={searchTerm} setSearchTerm={setSearchTerm} addtocart={addtocart}/>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
    );
}

export default Homepage;