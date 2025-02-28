'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

// Sample products data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "/images/product1.jpg",
    category: "electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "/images/product2.jpg",
    category: "electronics"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "/images/product3.jpg",
    category: "sports"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 59.99,
    image: "/images/product4.jpg",
    category: "fashion"
  },
  // Add more products as needed
];

const categoryDetails = {
  electronics: {
    title: "Electronics",
    description: "Discover the latest in technology and gadgets",
    banner: "/images/electronics.jpg"
  },
  fashion: {
    title: "Fashion",
    description: "Stay trendy with our latest fashion collection",
    banner: "/images/fashion.jpg"
  },
  sports: {
    title: "Sports",
    description: "Equipment and gear for every sport",
    banner: "/images/sports.jpg"
  },
  "home-living": {
    title: "Home & Living",
    description: "Make your home beautiful and comfortable",
    banner: "/images/home-living.jpg"
  }
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categoryDetails[slug as keyof typeof categoryDetails];

  if (!category) {
    return (
      <div className={styles.container}>
        <h1>Category not found</h1>
      </div>
    );
  }

  const categoryProducts = products.filter(
    product => product.category === slug
  );

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={category.banner}
          alt={category.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.bannerContent}>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
      </div>

      <div className={styles.productSection}>
        <h2>Products in {category.title}</h2>
        <div className={styles.productGrid}>
          {categoryProducts.map((product) => (
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
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <button className={styles.addToCartBtn}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 