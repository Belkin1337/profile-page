import { cn } from "@/lib/utils/styles"

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-500 dark:bg-neutral-800", className)}
      {...props}
    />
  )
} 