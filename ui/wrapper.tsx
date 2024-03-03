import { cva, type VariantProps } from "class-variance-authority"

const wrapperVariants = cva(
  "flex flex-col items-center w-[90%] mx-auto relative gap-y-6 overflow-hidden", {
    variants: {
      variant: {
        centered: "justify-center",
        started: "justify-start",
        ended: "justify-end"
      },
      paddingY: {
        sm: "py-6",
        md: "py-10",
        lg: "py-14",
        xl: "py-18",
        big: "py-22",
      },
      paddingX: {
        sm: "py-6",
        md: "py-10",
        lg: "py-14",
        xl: "py-18",
        big: "py-22",
      },
      height: {
        screen: "min-h-screen",
        max: "h-max",
      }
    },
    defaultVariants: {
      variant: "centered",
      paddingY: "sm",
    }
  }
)

export interface WrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof wrapperVariants> { 
    children: React.ReactNode 
  }

export const Wrapper = ({
  className,
  variant,
  paddingX,
  paddingY,
  children,
  ...props
}: WrapperProps) => {
  return (
    <div className={wrapperVariants({ className, variant, paddingX, paddingY })} {...props}>
      {children}
    </div>
  )
}
