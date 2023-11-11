import React from 'react';
import styles from "./Categories.module.css"

const Categorycards = ({ category }) => {
    return (
        <div className={styles.categorycard}>
                    <h2 className={styles.title}>{category.title}</h2>
                    <p className={styles.description}>{category.description}</p>
                    <a href={category.link}>View sub categories</a><br></br>
                    <a href={category.link1} style={{fontSize: "15px"}}>View all Products in Category</a>
        </div>
    );
}

export default Categorycards;
