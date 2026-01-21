import { Inter } from "next/font/google";
import { Search } from "lucide-react";
import styles from "./ProductsPage.module.css";
import { Input } from "@/components/ui/input";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function ProductsPage() {
  return (
    <div className={`${styles.searchSection} ${inter.className}`}>
      <div className={styles.searchBlock}>
        <p className={styles.searchTitle}>Search products by keyword</p>
        <div className={styles.searchInput}>
          <Input
            type="search"
            placeholder="Search keyword"
            aria-label="Search keyword"
            className="h-auto border-0 bg-transparent px-0 py-0 text-[13px] font-normal shadow-none placeholder:text-[#7f7f7f] focus-visible:ring-0"
          />
          <span className={styles.searchIcon} aria-hidden="true">
            <Search size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
