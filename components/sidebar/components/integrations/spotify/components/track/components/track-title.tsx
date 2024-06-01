import { useEffect, useRef } from "react"
import { SpotifySong } from "@/types/spotify";

export const TitleSong = ({
  item
}: SpotifySong) => {
  const ref = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const checkOverflow = () => {
      const titleElement = ref.current;

      if (titleElement && titleElement.scrollWidth > titleElement.clientWidth) {
        titleElement.classList.add('marquee-animation');
      } else {
        titleElement?.classList.remove('marquee-animation');
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  return (
    <h2 ref={ref} className={`font-medium text-md md:text-lg text-neutral-100 truncate`}>
      {item.name}
    </h2>
  )
}