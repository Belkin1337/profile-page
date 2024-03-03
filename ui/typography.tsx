import { VariantProps, cva } from "class-variance-authority"

const typographyVariants = cva("", {
  variants: {
    variant: {
      default: "text-white",
      secondary: "text-neutral-400",
      heading: "lg:text-[40px] text-[26px]",
      subtitle: "text-xl md:text-2xl",
      truncated: "truncate",
      link: "cursor-pointer hover:underline"
    },
    col: {
      default: "text-white",
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
    col: "default",
    font: "default"
  }
})

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>,
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
    className }))
  } {...props}/>
}