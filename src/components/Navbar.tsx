'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          AusMarket
        </Link>
        
        <div className={styles.links}>
          <Link 
            href="/products" 
            className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`}
          >
            Products
          </Link>
          <Link 
            href="/offers" 
            className={`${styles.link} ${pathname === '/offers' ? styles.active : ''}`}
          >
            Offers
          </Link>
          <Link 
            href="/about/story" 
            className={`${styles.link} ${pathname.startsWith('/about') ? styles.active : ''}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}
          >
            Contact
          </Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.cartBtn}>
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
} 