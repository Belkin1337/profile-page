import { cn } from "@/lib/utils/styles/cn"
import { HTMLAttributes } from "react";

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-500 dark:bg-neutral-800",
        className)}
      {...props}
    />
  )
} 