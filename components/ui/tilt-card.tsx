import { VariantProps, cva } from 'class-variance-authority';
import Tilt from 'react-parallax-tilt';

export const tiltVariants = cva(
  "flex flex-col card-block justify-start xl:justify-start px-6 py-12 lg:px-12 lg:py-24 gap-y-4 w-full shadow-CARD",
  {
    variants: {
      variant: {
        default: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 via-gray-950 to-black"
      },
      size: {
        default: "h-[370px] lg:h-[540px]"
      },
      shadow: {
        default: "shadow-MAIN_SEAWAVE"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shadow: "default"
    }
  }
)

interface TiltCardProps {
  children: React.ReactNode
}

export interface TiltCardVariantsProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tiltVariants>,
  TiltCardProps { children: React.ReactNode }

const TiltCard: React.FC<TiltCardVariantsProps> = ({ 
  className, 
  variant, 
  size, 
  shadow, 
  children 
}) => {
  return (
    <Tilt
      tiltAngleXInitial={2}
      tiltAngleYInitial={4}
      tiltAxis="x"
      gyroscope
      transitionEasing="cubic-bezier(.03,.98,.52,.99)"
      className={tiltVariants({ 
        variant, 
        size, 
        shadow, 
        className }
      )}
    >
      {children}
    </Tilt >
  );
}

export default TiltCard;