"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Search } from "lucide-react";
import styles from "./ProductsPage.module.css";
import { Input } from "@/components/ui/input";
import ProductsGrid from "./ProductsGrid";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return;
    }
    const timeoutId = setTimeout(() => {
      fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(
          trimmedQuery,
        )}`,
      )
        .then((res) => res.json())
        .then((data) => {
          const nextProducts = Array.isArray(data)
            ? data
            : (data.products ?? []);
          setProducts(nextProducts);
          setTotalCount(
            Array.isArray(data)
              ? nextProducts.length
              : (data.total ?? nextProducts.length),
          );
          setHasSearched(true);
          console.log("Search results:", nextProducts);
        })
        .catch((error) => {
          console.error("Search error:", error);
        });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className={`${styles.searchSection} ${inter.className}`}>
      <div className={styles.searchBlock}>
        <p className={styles.searchTitle}>Search products by keyword</p>
        <div className={styles.searchInput}>
          <Input
            type="search"
            placeholder="Search keyword"
            aria-label="Search keyword"
            value={query}
            onChange={(event) => {
              const nextValue = event.target.value;
              setQuery(nextValue);
              if (!nextValue.trim()) {
                setProducts([]);
                setTotalCount(0);
                setHasSearched(false);
              }
            }}
          />
          <span className={styles.searchIcon} aria-hidden="true">
            <Search size={16} />
          </span>
        </div>
        {hasSearched && (
          <p className={styles.resultsCount}>
            Total results count: <span>{totalCount}</span>
          </p>
        )}
      </div>
      {hasSearched && (
        <div className={styles.resultsSection}>
          {products.length === 0 ? (
            <div className={styles.emptyState}>
              <Image
                src="/emptyResult2.png"
                alt="No results"
                width={150}
                height={150}
              />
              <p>No results for your search!</p>
              <span>Try another keyword</span>
            </div>
          ) : (
            <ProductsGrid products={products} />
          )}
        </div>
      )}
    </div>
  );
}
