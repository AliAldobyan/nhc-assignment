"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Search } from "lucide-react";
import styles from "./ProductsPage.module.css";
import { Input } from "@/components/ui/input";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

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
          setProducts(data.products ?? []);
          console.log("Search results:", data.products ?? []);
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
              setQuery(event.target.value);
              if (!event.target.value.trim()) setProducts([]);
            }}
          />
          <span className={styles.searchIcon} aria-hidden="true">
            <Search size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
