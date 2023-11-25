import { cva, type VariantProps } from "class-variance-authority"

const WrapperVariants = cva(
  "flex flex-col items-center w-[90%] mx-auto relative gap-y-6",
  {
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
  VariantProps<typeof WrapperVariants> { children: React.ReactNode }

export const Wrapper: React.FC<WrapperProps> = ({
  className,
  variant,
  paddingX,
  paddingY,
  children,
  ...props
}) => {
  return (
    <div className={WrapperVariants({
      className,
      variant,
      paddingX,
      paddingY
    })} {...props} >
      {children}
    </div>
  )
}
