import { VariantProps, cva } from "class-variance-authority";

export const cardVariants = cva(
  "flex", {
  variants: {
    variant: {
      default: "bg-gradient-to-l from-gray-700 to-gray-700",
      pink: "bg-gradient-to-tl from-pink-400 to-pink-600",
      'soft-metal': "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200",
      salem: "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600",
      deluge: "bg-gradient-to-r from-slate-900 to-slate-700"
    },
    padding: {
      default: "lg:p-12 p-4",
      lg: "p-8",
      md: "p-4",
      sm: "p-2",
      sm_sm: "p-1",
      none: "p-0"
    },
    rounded: {
      default: "rounded-md",
      xl: "rounded-xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "default"
  }
}
)

export interface CardVariantProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> {}

export const Card = ({
  className,
  variant,
  padding,
  rounded,
  ...props
}: CardVariantProps) => {
  return (
    <div className={cardVariants({
      variant,
      padding,
      className,
      rounded
    })}
      {...props}
    />
  )
}