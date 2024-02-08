import { cva, type VariantProps } from "class-variance-authority"

const blockCardVariants = cva(
  "flex flex-col cursor-pointer items-center text-neutral-900 text-[1.2rem] md:text-[1.6rem] transition rounded-xl w-max", {
    variants: {
      variant: {
        default: "text-neutral-900 bg-neutral-400",
        white: "bg-neutral-100 border-[1px] border-neutral-300",
      },
      padding: {
        default: "px-4 py-2",
        lg: "px-6 py-4",
        square: "p-6",
        rectangle: "px-6 py-2"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default"
    }
  }
)

export interface BlockCardProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof blockCardVariants> { }

export const BlockCard = ({ className, variant, padding, ...props }: BlockCardProps) => {
  return (
    <button className={blockCardVariants({
      variant,
      padding,
      className
    })} {...props} />
  )
}