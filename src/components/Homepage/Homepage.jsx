import React, { useState } from 'react';
import Categories from '../Categories/Categories';

function Homepage() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <Categories searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    );
}

export default Homepage;