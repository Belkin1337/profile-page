import Image from "next/image"
import useSWR from "swr"
import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation"
import { Skeleton } from '@/ui/skeleton';
import { Progress } from '@/ui/progress';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const formatDate = (durationInMilliseconds: number) => {
  const totalSeconds = Math.floor(durationInMilliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
  return `${minutes}:${formattedSeconds}`;
};

export const Track = () => {
  const { 
    data, 
    mutate, 
    isLoading 
  } = useSWR("/api/spotify/now-playing", fetcher);

  const router = useRouter();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const artistRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const titleElement = titleRef.current;
      const artistElement = artistRef.current;

      if (titleElement && titleElement.scrollWidth > titleElement.clientWidth) {
        titleElement.classList.add('marquee-animation');
      } else {
        titleElement?.classList.remove('marquee-animation');
      }

      if (artistElement && artistElement.scrollWidth > artistElement.clientWidth) {
        artistElement.classList.add('marquee-animation');
      } else {
        artistElement?.classList.remove('marquee-animation');
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };

  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (data?.isPlaying) {
      timer = setInterval(() => {
        data.progress += 1000;

        if (data.progress >= data.duration) {
          clearInterval(timer);
        }
      }, 1000);
    }

    if (data) {
      mutate();
    }

    return () => clearInterval(timer);
  }, [data, mutate]);

  const trackHandler = () => {
    if (data?.isPlaying) {
      router.push(data.songUrl)
    } else {
      router.push("https://open.spotify.com/user/31veybhgwnxxou5l2shlctvaeknm")
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-start">
        <div className="flex items-center gap-2 cursor-pointer max-h-[128px] pt-4 w-full">
          <div className="overflow-hidden w-[84px] rounded-xl">
            <Skeleton className="h-[82px]" />
          </div>
          <div className="flex flex-col gap-y-4 justify-between w-4/5 overflow-hidden">
            <div className="flex flex-col gap-y-2">
              <Skeleton className={`font-medium text-md md:text-lg text-neutral-100 truncate w-[200px] h-[14px]`} />
              <Skeleton className={`font-normal text-neutral-400 text-sm md:text-md truncate w-[100px] h-[12px]`} />
            </div>
            <div className="flex flex-row justify-between items-center gap-x-2">
              <Skeleton className=" text-white text-sm h-[8px] w-[24px]" />
              <Skeleton className="w-full h-[6px]" />
              <Skeleton className=" text-white text-sm h-[8px] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-start">
      <div onClick={() => trackHandler()} className="flex items-center gap-2 cursor-pointer max-h-[128px] pt-4 w-full">
        <div className="overflow-hidden w-[86px] rounded-xl">
          {data?.isPlaying ? (
            <Image
              width={94}
              height={94}
              src={data?.albumImageUrl}
              alt={data?.album}
              loading="lazy"
            />
          ) : (
            <div className="w-[86px] h-[82px] bg-black" />
          )}
        </div>
        <div className="flex flex-col gap-y-2 justify-between w-4/5 overflow-hidden">
          <div className="flex flex-col">
            <h2 ref={titleRef} className={`font-medium text-md md:text-lg text-neutral-100 truncate`}>
              {data?.isPlaying ? data.title : 'Сейчас оффлайн'}
            </h2>
            <p ref={artistRef} className={`font-normal text-neutral-400 text-sm md:text-md truncate`}>
              {data?.isPlaying ? data.artist : null}
            </p>
          </div>
          {data?.isPlaying ? (
            <div className="flex flex-row justify-between items-center gap-x-2">
              <p className=" text-white text-sm">
                {data?.isPlaying ? formatDate(data.progress) : '00:00'}
              </p>
              <Progress value={(data?.progress / data?.duration) * 100} className="w-full" />
              <p className=" text-white text-sm">
                {data?.isPlaying ? formatDate(data.duration) : '00:00'}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}