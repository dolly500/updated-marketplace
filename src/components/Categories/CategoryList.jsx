import React from 'react';
import CategoryCard from './Categorycards';
import styles from "./Categories.module.css"

const categoriesData = [
  {
    title: 'Press-on nails',
    description: 'Explore a variety of press-on nails',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Tools & accessories',
    description: 'Discover essential tools and accessories',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Press-on nails',
    description: 'Explore a variety of press-on nails',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Tools & accessories',
    description: 'Discover essential tools and accessories',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Press-on nails',
    description: 'Explore a variety of press-on nails',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Tools & accessories',
    description: 'Discover essential tools and accessories',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Press-on nails',
    description: 'Explore a variety of press-on nails',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Tools & accessories',
    description: 'Discover essential tools and accessories',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Press-on nails',
    description: 'Explore a variety of press-on nails',
    link: '/press-on-nails',
    link1: '/'
  },
  {
    title: 'Tools & accessories',
    description: 'Discover essential tools and accessories',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Press-on nails',
    description: 'Explore a variety of press-on nails',
    link: '/products',
    link1: '/'
  },
  {
    title: 'Tools & accessories',
    description: 'Discover essential tools and accessories',
    link: '/products',
    link1: '/'
  },
  // Add more categories as needed
];

console.log(categoriesData)

const CategoryList = () => {
  return (
    <div className={styles.categorylist}>
      {categoriesData.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
