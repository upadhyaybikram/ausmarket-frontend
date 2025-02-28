'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { useCart } from '@/context/CartContext';
import SearchBar from './SearchBar';
import { 
  FiSearch, 
  FiShoppingCart, 
  FiUser, 
  FiMenu, 
  FiChevronDown,
  FiHeart,
  FiPackage,
  FiLogOut
} from 'react-icons/fi';

const categories = [
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Home & Living', slug: 'home-living' },
  { name: 'Sports', slug: 'sports' }
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <FiMenu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>AusMarket</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`${styles.desktopNav} ${isMobileMenuOpen ? styles.showMobile : ''}`}>
          {/* Categories Dropdown */}
          <div 
            className={styles.dropdown}
            onMouseEnter={() => setIsCategoryDropdownOpen(true)}
            onMouseLeave={() => setIsCategoryDropdownOpen(false)}
          >
            <button className={styles.dropdownButton}>
              Categories
              <FiChevronDown className={styles.arrow} />
            </button>
            {isCategoryDropdownOpen && (
              <div className={styles.dropdownContent}>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className={styles.dropdownItem}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/products" 
            className={`${styles.navLink} ${pathname === '/products' ? styles.active : ''}`}
          >
            All Products
          </Link>
          
          <Link 
            href="/offers" 
            className={`${styles.navLink} ${pathname === '/offers' ? styles.active : ''}`}
          >
            Special Offers
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className={styles.actions}>
          {/* Search */}
          <div className={styles.searchContainer}>
            <button 
              className={styles.iconButton}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
            {isSearchOpen && (
              <div className={styles.searchBox}>
                <SearchBar onClose={() => setIsSearchOpen(false)} />
              </div>
            )}
          </div>

          {/* User Account */}
          <div 
            className={styles.dropdown}
            onMouseEnter={() => setIsUserDropdownOpen(true)}
            onMouseLeave={() => setIsUserDropdownOpen(false)}
          >
            <button className={styles.iconButton} aria-label="User account">
              <FiUser size={20} />
            </button>
            {isUserDropdownOpen && (
              <div className={`${styles.dropdownContent} ${styles.userDropdown}`}>
                <Link href="/account" className={styles.dropdownItem}>
                  <FiUser size={16} />
                  <span>My Account</span>
                </Link>
                <Link href="/orders" className={styles.dropdownItem}>
                  <FiPackage size={16} />
                  <span>Orders</span>
                </Link>
                <Link href="/wishlist" className={styles.dropdownItem}>
                  <FiHeart size={16} />
                  <span>Wishlist</span>
                </Link>
                <button className={`${styles.dropdownItem} ${styles.signOut}`}>
                  <FiLogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link href="/cart" className={styles.cartButton}>
            <FiShoppingCart size={20} />
            {totalItems > 0 && (
              <span className={styles.cartCount}>{totalItems}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className={styles.mobileSearch}>
          <SearchBar onClose={() => setIsSearchOpen(false)} />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className={styles.mobileMenuItem}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/products"
              className={styles.mobileMenuItem}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              href="/offers"
              className={styles.mobileMenuItem}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Special Offers
            </Link>
            <div className={styles.mobileMenuDivider} />
            <Link href="/account" className={styles.mobileMenuItem}>
              <FiUser size={16} />
              <span>My Account</span>
            </Link>
            <Link href="/orders" className={styles.mobileMenuItem}>
              <FiPackage size={16} />
              <span>Orders</span>
            </Link>
            <Link href="/wishlist" className={styles.mobileMenuItem}>
              <FiHeart size={16} />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 