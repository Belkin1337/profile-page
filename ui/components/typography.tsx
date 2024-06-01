import { VariantProps, cva } from "class-variance-authority"
import { HTMLAttributes } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      default: "text-black dark:text-white",
      secondary: "text-neutral-800 dark:text-neutral-400",
      heading: "lg:text-[40px] text-[26px]",
      subtitle: "text-lg md:text-xl font-normal",
      truncated: "truncate",
      link: "cursor-pointer hover:underline"
    },
    col: {
      gray: "text-neutral-400"
    },
    size: {
      default: "text-[16px]",
      sm: "text-sm",
      large: "text-lg",
      big: "text-2xl"
    },
    font: {
      default: "font-medium",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold"
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    font: "default"
  }
})

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof typographyVariants> {}

export const Typography = ({ 
  variant, 
  col, 
  size, 
  font,
  className, 
  ...props 
}: TypographyProps) => {
  return <p className={typographyVariants(({ 
    variant,
    col,
    font,
    size, 
    className
  }))}
            {...props}
  />
}