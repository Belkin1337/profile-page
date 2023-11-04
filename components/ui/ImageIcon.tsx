import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ImageIconProps {
  href: string,
  srcImage: StaticImageData,
  alt?: any
}

const ImageIcon: React.FC<ImageIconProps> = ({ href, srcImage, alt }) => {
  return (
    <Link target="_blank" href={href} >
      <Image src={srcImage} alt={alt} width={64} height={64} className="bg-black hover:bg-white hover:rotate-180 duration-200 transition ease-in bg-opacity-60 p-3 rounded-full hover:fill-[#2AABEE]"
      />
    </Link>
  )
}

export default ImageIcon;