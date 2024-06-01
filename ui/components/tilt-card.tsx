import { VariantProps, cva } from 'class-variance-authority';
import Tilt from 'react-parallax-tilt';
import { HTMLAttributes, ReactNode } from "react";

export const tiltVariants = cva(
  "flex flex-col justify-start xl:justify-start px-6 py-12 lg:px-12 lg:py-24 gap-y-4 w-full shadow-CARD", {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-deluge-900 via-deluge-900 to-deluge-950"
      },
      size: {
        default: "h-[370px] lg:h-[540px]"
      },
      shadow: {
        default: "shadow-deluge-600"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shadow: "default"
    }
  }
)

export interface TiltCardVariantsProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tiltVariants> {
  children: ReactNode
}

export const TiltCard = ({
  className,
  variant,
  size,
  shadow,
  children
}: TiltCardVariantsProps) => {
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
        className
      })}>
      {children}
    </Tilt >
  );
}