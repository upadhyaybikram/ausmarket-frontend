'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useMemo } from 'react';

const offers = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 50% off on selected items",
    image: "/images/product1.jpg",
    discount: "50%",
    validUntil: "2024-08-31",
    category: "All Categories"
  },
  {
    id: 2,
    title: "Electronics Deal",
    description: "Save big on latest gadgets",
    image: "/images/electronics.jpg",
    discount: "30%",
    validUntil: "2024-07-15",
    category: "Electronics"
  },
  {
    id: 3,
    title: "Fashion Week",
    description: "Designer brands at amazing prices",
    image: "/images/fashion.jpg",
    discount: "40%",
    validUntil: "2024-06-30",
    category: "Fashion"
  },
  {
    id: 4,
    title: "Sports Equipment",
    description: "Get fit for less",
    image: "/images/sports.jpg",
    discount: "25%",
    validUntil: "2024-09-15",
    category: "Sports"
  }
];

export default function OffersPage() {
  // Format dates consistently using useMemo
  const formattedOffers = useMemo(() => 
    offers.map(offer => ({
      ...offer,
      formattedDate: new Date(offer.validUntil).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })), 
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Special Offers</h1>
        <p>Don't miss out on these amazing deals!</p>
      </div>

      <div className={styles.offersGrid}>
        {formattedOffers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <div className={styles.offerImage}>
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.discount}>
                {offer.discount} OFF
              </div>
            </div>
            <div className={styles.offerContent}>
              <h2>{offer.title}</h2>
              <p className={styles.description}>{offer.description}</p>
              <p className={styles.category}>Category: {offer.category}</p>
              <p className={styles.validity}>
                Valid until: {offer.formattedDate}
              </p>
              <button className={styles.shopNowBtn}>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.newsletter}>
        <h2>Get Notified About New Offers</h2>
        <p>Subscribe to our newsletter and never miss a deal!</p>
        <form className={styles.subscribeForm}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
} 