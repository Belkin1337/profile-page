import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const badgeVariants = cva(
  "rounded-md inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "text-neutral-800 bg-neutral-400",
        secondary: "text-neutral-400 bg-neutral-800",
        outline: "border border-neutral-800 bg-pink text-neutral-200"
      },
      size: {
        default: "px-2 py-1",
        sm: "px-4 py-2",
        lg: "px-6 py-4",
        xl: "px-8 py-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface BadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {}
 
export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={badgeVariants({ 
  variant, 
  size, 
  className }
)} {...props} />;