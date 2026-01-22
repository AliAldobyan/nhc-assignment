import styles from "./ProductsGrid.module.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs border-0">
      <CardHeader className="p-3">
        <Skeleton className="aspect-video w-full bg-[var(--skeleton)]" />
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <Skeleton className="h-4 w-2/3 bg-[var(--skeleton)]" />
        <Skeleton className="mt-2 h-4 w-1/2 bg-[var(--skeleton)]" />
        <div className="mt-3 flex items-center justify-between">
          <Skeleton className="h-4 w-14 bg-[var(--skeleton)]" />
          <Skeleton className="h-7 w-14 rounded-md bg-[var(--skeleton)]" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProductsGridSkeleton() {
  const items = Array.from({ length: 6 });

  return (
    <div className={styles.grid}>
      {items.map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
