'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

// Sample featured products data
const featuredProducts = [
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
  }
];

const categories = [
  {
    name: 'Electronics',
    image: '/images/electronics.jpg',
    slug: 'electronics'
  },
  {
    name: 'Fashion',
    image: '/images/fashion.jpg',
    slug: 'fashion'
  },
  {
    name: 'Home & Living',
    image: '/images/home-living.jpg',
    slug: 'home-living'
  },
  {
    name: 'Sports',
    image: '/images/sports.jpg',
    slug: 'sports'
  }
];

export default function Home() {
  const router = useRouter();

  const handleShopNow = () => {
    router.push('/products');
  };

  const handleCategoryClick = (slug: string) => {
    router.push(`/category/${slug}`);
  };

  const handleAddToCart = (productId: number) => {
    // TODO: Implement cart functionality
    console.log(`Added product ${productId} to cart`);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // TODO: Implement newsletter subscription
    console.log(`Subscribed with email: ${email}`);
    form.reset();
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to AusMarket</h1>
          <p>Your One-Stop Shop for Quality Products</p>
          <button onClick={handleShopNow} className={styles.shopNowBtn}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <h2>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div 
              key={category.name} 
              className={styles.categoryCard}
              onClick={() => handleCategoryClick(category.slug)}
            >
              <div className={styles.categoryImage}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3>{category.name}</h3>
              <button className={styles.exploreBtn}>Explore</button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button 
                className={styles.addToCartBtn}
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className={styles.specialOffers}>
        <h2>Special Offers</h2>
        <div className={styles.offerBanner}>
          <h3>Summer Sale</h3>
          <p>Up to 50% off on selected items</p>
          <button 
            onClick={() => router.push('/offers')}
            className={styles.viewOffersBtn}
          >
            View Offers
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest products and offers</p>
        <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            required 
          />
          <button type="submit" className={styles.subscribeBtn}>
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>About Us</h3>
            <ul>
              <li onClick={() => router.push('/about/story')}>Our Story</li>
              <li onClick={() => router.push('/about/careers')}>Careers</li>
              <li onClick={() => router.push('/about/press')}>Press</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Customer Service</h3>
            <ul>
              <li onClick={() => router.push('/contact')}>Contact Us</li>
              <li onClick={() => router.push('/shipping')}>Shipping Info</li>
              <li onClick={() => router.push('/returns')}>Returns</li>
              <li onClick={() => router.push('/faq')}>FAQ</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Follow Us</h3>
            <ul>
              <li onClick={() => window.open('https://facebook.com', '_blank')}>Facebook</li>
              <li onClick={() => window.open('https://instagram.com', '_blank')}>Instagram</li>
              <li onClick={() => window.open('https://twitter.com', '_blank')}>Twitter</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 AusMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
