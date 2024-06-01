import { SpotifySong } from "@/types/spotify";
import { useEffect, useRef } from "react"

export const TrackArtist = ({
  is_playing,
  item
}: SpotifySong) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const artistElement = ref.current;

      if (artistElement && artistElement.scrollWidth > artistElement.clientWidth) {
        artistElement.classList.add('marquee-animation');
      } else {
        artistElement?.classList.remove('marquee-animation');
      }
    }

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [])

  return (
    <p ref={ref} className={`font-normal text-neutral-400 text-sm md:text-md truncate`}>
      {is_playing ? item.artists.map((_artist) => _artist.name).join(", ") : null}
    </p>
  )
}