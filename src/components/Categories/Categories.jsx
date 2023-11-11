import React, {useState} from 'react';
import imgFour from '../Images/productFour.png';
import imgThree from '../Images/productThree.png';
import styles from "./Categories.module.css";


function Categories() {


    const productsData = [
        {
            id: 1,
            name: "product-one",
            price: "$" + 50,
            image: imgThree
        },
        {
            id: 2,
            name: "product-two",
            price: "$" + 60,
            image: imgThree

        },
        {
            id: 3,
            name: "product-three",
            price: "$" + 80,
            image: imgThree

        },
        {
            id: 4,
            name: "product-four",
            price: "$" + 34,
            image: imgFour

        },
        {
            id: 5,
            name: "product-five",
            price: "$" + 58,
            image: imgFour

        }
    ]

    const [products, setProducts] = useState(productsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
  
    const handleSortChange = (e) => {
      setSortOrder(e.target.value);
      filterAndSortProducts(searchTerm, e.target.value);
    };
  
    const filterAndSortProducts = (searchText, order) => {
      const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
  
      const sortedProducts = filteredProducts.sort((a, b) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
  
      setProducts(sortedProducts);
    }; 

  return (    
    <>
      
        <div className={styles.inputContainer}>
        <select onChange={handleSortChange} value={sortOrder} style={{width: '200px'}}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="desc">Recently Added</option>
            <option value="desc">Date Added</option>
          </select>
        </div>
    
    <div className={styles.productCards}>
                
        {
            products && products.map(product => {
                return (
                    <div className={styles.productCard} key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                )
            })
        }
      
    </div>
    </>
  );
}

export default Categories;