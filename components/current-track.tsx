import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { TrackProps } from '../types/track-types';
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const getFormatDate = (durationInMilliseconds: number) => {
  const totalSeconds = Math.floor(durationInMilliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutes}:${formattedSeconds}`;
};

export const CurrentTrack = ({ data }: TrackProps) => {
  const router = useRouter();

  // useEffect(() => {
  //   let timer;

  //   if (data?.isPlaying) {
  //     timer = setInterval(() => {
  //       data.progress += 1000; // Assuming progress is in milliseconds
  //       if (data.progress >= data.duration) {
  //         clearInterval(timer);
  //       }
  //     }, 1000);
  //   }

  //   return () => clearInterval(timer);
  // }, [data]);

  const trackHandler = () => {
    if (data?.isPlaying) {
      router.push(data.songUrl)
    } else {
      router.push("https://open.spotify.com/user/31veybhgwnxxou5l2shlctvaeknm")
    }
  }

  return (
    <div className="flex items-center justify-start">
      <div className="flex items-center gap-2 cursor-pointer h-[68px] w-full ">
        <div className="overflow-hidden w-[48px] rounded-xl">
          {data?.isPlaying ? (<Image width={96} height={96} src={data?.albumImageUrl} alt={data?.album} />)
            : (
              <div className="w-[54px] h-[54px] bg-black" />
            )}
        </div>
        <div className="flex flex-col gap-y-2 justify-between w-3/4">
          <div className="flex flex-col">
            <h2
              onClick={() => trackHandler()}
              className="font-medium text-md md:text-lg text-neutral-100 hover:underline hover:underline-offset-4"
            >
              {data?.isPlaying ? data.title : "Currently offline"}
            </h2>
            <p onClick={() => router.push(data.artistUrl)} className="font-normal text-neutral-400 text-sm md:text-md hover:underline hover:underline-offset-4">
              {data?.isPlaying ? data.artist : null}
            </p>
          </div>
          {/* <div className="flex flex-row justify-between items-center gap-x-2">
            <p className=" text-white text-sm">{data?.isPlaying ? getFormatDate(data.progress) : '00:00'}</p>
            <Progress value={(data?.progress / data?.duration) * 100} className="w-full" />
            <p className=" text-white text-sm">{data?.isPlaying ? getFormatDate(data.duration) : '00:00'}</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}