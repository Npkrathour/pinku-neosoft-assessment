import Skeleton from "./Skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="w-sm bg-card rounded-2xl border overflow-hidden shadow-md mx-auto p-4">
      <figure>
        {/* Image Skeleton */}
        <Skeleton className="w-full h-56 rounded-lg" />
        <figcaption className="py-4 text-start">
          <div className="flex gap-2 items-center justify-between mb-2">
            <Skeleton className="h-4 w-28" />
            <div className="flex gap-1">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
          </div>
          <Skeleton className="h-5 w-44 mb-2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4 mt-1" />
        </figcaption>
      </figure>
      <div className="flex gap-5 items-center">
        <div>
          <Skeleton className="h-3 w-12 mb-2" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="h-10 flex-1 rounded-md" />
      </div>
    </div>
  );
}
