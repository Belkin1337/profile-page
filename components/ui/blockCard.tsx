import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const blockCardVariants = cva(
  "flex cursor-pointer items-center text-neutral-900 text-[1.6rem] md:text-[2rem] hover:-translate-y-2 transition rounded-md ease-linear",
  {
    variants: {
      variant: {
        default: "text-neutral-900 bg-neutral-400",
        pink: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700",
        violet: "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",
        white: "bg-neutral-100 border-[1px] border-neutral-300",
        'purple-beam': "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
      },
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-4",
        square: "p-6",
        rectangle: "px-6 py-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface BlockCardProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof blockCardVariants> {}
 
export const BlockCard: React.FC<BlockCardProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={blockCardVariants({ variant, size, className })} {...props} />;