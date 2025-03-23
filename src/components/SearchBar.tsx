'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './SearchBar.module.css';

interface SearchResult {
  id: number;
  name: string;
  category: string;
  image: string;
}

export default function SearchBar({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    const searchProducts = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
      onClose?.();
    }
  };

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder="Search products..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      {showSuggestions && (query.length >= 2) && (
        <div className={styles.suggestions}>
          {isLoading ? (
            <div className={styles.loading}>Loading...</div>
          ) : results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.id}
                className={styles.suggestionItem}
                onClick={() => {
                  router.push(`/product/${result.id}`);
                  setShowSuggestions(false);
                  onClose?.();
                }}
              >
                <div className={styles.suggestionImageWrapper}>
                  <Image
                    src={result.image}
                    alt={result.name}
                    fill
                    sizes="40px"
                    className={styles.suggestionImage}
                  />
                </div>
                <div className={styles.suggestionInfo}>
                  <div className={styles.suggestionName}>{result.name}</div>
                  <div className={styles.suggestionCategory}>{result.category}</div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No products found</div>
          )}
        </div>
      )}
    </div>
  );
} 