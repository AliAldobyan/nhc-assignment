"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import ProductsGridSkeleton from "./components/ProductsGrid/ProductsGridSkeleton";
import SearchBar from "./components/SearchBar/SearchBar";
import EmptyState from "./components/EmptyState/EmptyState";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function ProductsPage() {
  const [query, setQuery] = useState(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("q") || "";
  });
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const hasQuery = query.trim().length > 0;
  const shouldCenterSearch = !hasSearched && !hasQuery;

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
      fetch(
        `/api/products?q=${encodeURIComponent(trimmedQuery)}`,
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
          setIsLoading(false);
          console.log("Search results:", nextProducts);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Search error:", error);
        });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div
      className={`flex w-full flex-col items-center justify-start gap-6 transition-[padding-top,min-height] duration-300 ease-out ${
        inter.className
      } ${shouldCenterSearch ? "min-h-[600px] pt-56" : "min-h-0 pt-0"}`}
    >
      <SearchBar
        query={query}
        onQueryChange={(nextValue) => {
          setQuery(nextValue);
          if (!nextValue.trim()) {
            setProducts([]);
            setTotalCount(0);
            setHasSearched(false);
            setIsLoading(false);
            if (typeof window !== "undefined") {
              const url = new URL(window.location.href);
              url.searchParams.delete("q");
              window.history.replaceState(null, "", url);
            }
          } else {
            setIsLoading(true);
            if (typeof window !== "undefined") {
              const url = new URL(window.location.href);
              url.searchParams.set("q", nextValue);
              window.history.replaceState(null, "", url);
            }
          }
        }}
        hasSearched={hasSearched}
        totalCount={totalCount}
      />
      {(hasQuery || hasSearched || isLoading) && (
        <div className="flex w-full max-w-[900px] flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-500">
          {isLoading ? (
            <ProductsGridSkeleton />
          ) : products.length > 0 ? (
            <ProductsGrid products={products} />
          ) : hasSearched ? (
            <EmptyState />
          ) : null}
        </div>
      )}
    </div>
  );
}
