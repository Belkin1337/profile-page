import { VariantProps, cva } from "class-variance-authority";
import { StaticImageData } from "next/image";

const avatarVariants = cva(
  "cursor-pointer hover:brightness-50 z-1 transition duration-500",
  {
    variants: {
      variant: {
        default: "w-[452px] h-[452px]",
        md: "w-[220px] h-[220px]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface AvatarPropsData {
  src: string,
  alt: string
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof avatarVariants>,
  AvatarPropsData { }

export const Avatar: React.FC<AvatarProps> = ({
  className,
  variant,
  src,
  alt,
  ...props
}) => <img
    alt={alt}
    src={src}
    className={avatarVariants({ variant, className })}
    {...props}
  />;