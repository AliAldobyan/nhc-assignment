import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar({
  query,
  onQueryChange,
  hasSearched,
  totalCount,
}) {
  return (
    <div className="flex w-full max-w-[700px] flex-col gap-3">
      <p className="text-[18px] font-medium text-[var(--brand)]">
        Search products by keyword
      </p>
      <div className="flex items-center gap-2 rounded-md border border-[var(--text-primary)] bg-[var(--gray)] px-3 py-2 ">
        <Input
          type="search"
          placeholder="Search keyword"
          aria-label="Search keyword"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          className="h-auto border-0 bg-transparent px-0 py-0 text-[13px] border-[var(--border)] font-normal text-[var(--text-primary)] shadow-none placeholder:text-[12px] placeholder:text-[var(--text-muted)] focus-visible:ring-0"
        />
        <span
          className="inline-flex text-[var(--text-muted)]"
          aria-hidden="true"
        >
          <Search size={16} />
        </span>
      </div>
      {hasSearched && (
        <p className="text-left text-[13px] text-[var(--text-primary)]">
          Total results count:{" "}
          <span className="font-semibold text-[var(--brand)]">
            {totalCount}
          </span>
        </p>
      )}
    </div>
  );
}
