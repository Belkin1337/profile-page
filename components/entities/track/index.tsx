import { useEffect } from 'react';
import { useRouter } from "next/navigation"
import { Skeleton } from '@/ui/skeleton';
import { Artist } from './child/artist';
import { TitleSong } from './child/title';
import { DurationSong } from './child/duration';
import { SpotifySong } from '@/types/spotify';
import { BsEmojiFrown } from "react-icons/bs";
import { USER_LINK } from "@/lib/constants";
import { useScopedI18n } from '@/lib/next-international';
import Image from "next/image"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const Track = () => {
  const { data, mutate, isLoading } = useSWR<SpotifySong>("/api/spotify/now-playing", fetcher);
  const { push } = useRouter();

  const servicalT = useScopedI18n('servical');

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (data?.is_playing) {
      timer = setInterval(() => {
        data.progress_ms += 1000;

        if (data.progress_ms >= data.item.duration_ms) {
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
    if (data?.is_playing) {
      push(data.item.external_urls.spotify)
    } else {
      push(USER_LINK)
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

  if (!data?.is_playing) {
    return (
      <div className="flex items-center gap-x-4 pt-4">
        <div onClick={() => trackHandler()} className="flex cursor-pointer items-center rounded-md justify-center w-[82px] h-[82px] bg-neutral-950" >
          <BsEmojiFrown size={42} className="text-neutral-600" />
        </div>
        <p className='font-medium text-md md:text-lg text-neutral-100 truncate'>
          {servicalT('Offline')}
        </p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-start">
      <div onClick={() => trackHandler()} className="flex items-center gap-2 cursor-pointer max-h-[128px] pt-4 w-full">
        <div className="overflow-hidden w-[86px] rounded-xl">
          {data?.is_playing && (
            <Image
              width={94}
              height={94}
              src={data?.item.album.images[0].url}
              alt={data?.item.album.name}
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col gap-y-2 justify-between w-4/5 overflow-hidden">
          {data?.is_playing && (
            <>
              <div className="flex flex-col">
                <TitleSong
                  progress_ms={data.progress_ms}
                  item={data.item}
                  is_playing={data.is_playing}
                />
                <Artist
                  progress_ms={data.progress_ms}
                  item={data.item}
                  is_playing={data.is_playing}
                />
              </div>
              <DurationSong
                progress_ms={data.progress_ms}
                item={data.item}
                is_playing={data.is_playing}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}