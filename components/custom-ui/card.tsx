import { VariantProps, cva } from "class-variance-authority";

export const cardVariants = cva(
  "flex",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-l from-gray-700 to-gray-700 rounded-lg",
        pink: "bg-gradient-to-tl from-pink-400 to-pink-600",
        'soft-metal': "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200",
        salem: "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600",
      },
      size: {
        default: "lg:p-12 p-4",
        lg: "p-8",
        md: "p-4",
        sm: "p-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

interface CardProps {
  children: React.ReactNode;
}

export interface CardVariantProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants>,
  CardProps { children: React.ReactNode }

const Card: React.FC<CardVariantProps> = ({ className, variant, size, children, ...props }) => {
  return (
    <div className={cardVariants({ variant, size, className })}>
      {children}
    </div>
  )
}


export default Card;