import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <Skeleton className="h-6 w-40 bg-[var(--skeleton)]" />

      <div className="w-full max-w-[520px] overflow-hidden rounded-lg bg-[var(--surface)] shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
        <div className="relative h-[260px] w-full bg-[var(--surface)]">
          <Skeleton className="h-full w-full bg-[var(--skeleton)]" />
        </div>
      </div>

      <div className="grid w-full max-w-[520px] grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-full bg-[var(--skeleton)]" />
        ))}
      </div>

      <div className="w-full max-w-[700px]">
        <Skeleton className="h-4 w-40 bg-[var(--skeleton)]" />
        <Skeleton className="mt-3 h-3 w-full bg-[var(--skeleton)]" />
        <Skeleton className="mt-2 h-3 w-5/6 bg-[var(--skeleton)]" />
      </div>

      <div className="w-full max-w-[700px]">
        <Skeleton className="h-4 w-32 bg-[var(--skeleton)]" />
        <div className="mt-3 grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-[80px] w-full rounded-md bg-[var(--skeleton)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
