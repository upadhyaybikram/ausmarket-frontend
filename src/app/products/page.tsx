'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// Sample products data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "/images/product1.jpg",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "/images/product2.jpg",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "/images/product3.jpg",
    category: "Sports"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 59.99,
    image: "/images/product4.jpg",
    category: "Fashion"
  },
  // Add more products as needed
];

const categories = ["All", "Electronics", "Fashion", "Sports", "Home & Living"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0; // featured
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Our Products</h1>
        <p>Discover our wide range of quality products</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <select 
          className={styles.sortSelect}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className={styles.productGrid}>
        {sortedProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImage}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.price}>${product.price.toFixed(2)}</p>
              <button className={styles.addToCartBtn}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 