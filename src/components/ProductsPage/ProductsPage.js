"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "./ProductsPage.module.css";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import EmptyState from "./components/EmptyState/EmptyState";

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
      <SearchBar
        query={query}
        onQueryChange={(nextValue) => {
          setQuery(nextValue);
          if (!nextValue.trim()) {
            setProducts([]);
            setTotalCount(0);
            setHasSearched(false);
          }
        }}
        hasSearched={hasSearched}
        totalCount={totalCount}
      />
      {hasSearched && (
        <div className={styles.resultsSection}>
          {products.length === 0 ? (
            <EmptyState />
          ) : (
            <ProductsGrid products={products} />
          )}
        </div>
      )}
    </div>
  );
}
