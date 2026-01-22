import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import styles from "./SearchBar.module.css";

export default function SearchBar({
  query,
  onQueryChange,
  hasSearched,
  totalCount,
}) {
  return (
    <div className={styles.searchBlock}>
      <p className={styles.searchTitle}>Search products by keyword</p>
      <div className={styles.searchInput}>
        <Input
          type="search"
          placeholder="Search keyword"
          aria-label="Search keyword"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
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
  );
}
