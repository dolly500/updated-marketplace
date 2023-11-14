import React, { useState } from 'react';
import Categories from '../Categories/Categories';

function Homepage() {
    const [searchTerm, setSearchTerm] = useState('');
    const addtocart = (product) => {
        console.log('Product added to cart:', product);
      }
    return (
        <div>
            <Categories searchTerm={searchTerm} setSearchTerm={setSearchTerm} addtocart={addtocart} />
        </div>
    );
}

export default Homepage;