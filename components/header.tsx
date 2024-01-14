import Image from "next/image"
import { Menu } from 'lucide-react';
import { Github } from 'lucide-react';
import { Language } from "./tools/language"
import { Theme } from "./tools/theme";
import { TrackProps } from '../types/track-types';
import { CurrentTrack } from "./current-track";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";


export const Header = ({ data }: TrackProps) => {
  return (
    <Sheet>
      <div className="fixed top-0 right-0 left-0 w-full bg-MAIN_BACKGROUND/80 backdrop-filter backdrop-blur-md z-20">
        <div className="flex items-center w-[90%] mx-auto py-2 justify-between">
          <div className="flex gap-x-4 items-center">
            <div className="overflow-hidden rounded-xl border-2 border-transparent cursor-pointer hover:border-b-MAIN_PINK hover:border-r-MAIN_PINK hover:duration-300 duration-300">
              <Image src="/favicon.png" width={52} height={52} alt="pureawake avatar" />
            </div>
            <p className="text-white text-xl font-bold">/dev/pureawake</p>
          </div>
          <SheetTrigger>
            <Menu size={24} color="white" />
          </SheetTrigger>
        </div>
      </div>
      <SheetContent className="bg-dark-text p-0 m-0 border-l-dark-violet_miami">
        <div className="flex flex-col overflow-hidden h-[116px]">
          <img className="object-cover w-full" src="/images/avatars/avatar3.jpg" alt="cover" />
        </div>
        <div className="relative -top-14 left-4 w-[112px] h-[112px] overflow-hidden rounded-full border-8 border-dark-text">
          <img src="/images/avatars/avatar2.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative -top-8 mx-4 p-4 bg-black/80 rounded-xl flex flex-col">
          <div className="flex flex-col w-full">
            <p className="font-medium text-2xl text-white">Белкин</p>
            <HoverCard openDelay={1} closeDelay={1}>
              <HoverCardTrigger className="cursor-default">
                <p className="font-normal text-lg text-white">pureawake/he/her</p>
              </HoverCardTrigger>
              <HoverCardContent className="border-0 p-1 m-0 w-max bg-black/90">
                <p className="text-md text-neutral-400">Местоимения</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="relative -top-4 mx-4 p-4 overflow-hidden rounded-xl bg-black/80">
          <p className="font-medium text-lg text-white cursor-default">О себе:</p>
          <div className="flex flex-col w-full">
            <p className="text-white text-md">Абоба</p>
            <p className="text-white text-md">Кстати, вот мой проектик:&nbsp;
              <a href="https://fasberry.ru/" target="_blank" className="hover:underline">https://fasberry.ru</a>
            </p>
          </div>
        </div>
        <div className="relative -top-0 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
          <p className="font-medium text-lg text-white cursor-default">Сейчас слушает в Spotify:</p>
          <CurrentTrack data={data} />
        </div>
        <div className="relative top-4 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
          <p className="font-medium text-lg text-white cursor-default">Настройки:</p>
          <div className="flex items-center gap-x-4">
            <Language />
            <Theme />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}