import { Track } from "@/components/entities/track";
import { Language } from "@/features/language-switch"
import { Theme } from "@/features/theme-switch";
import { useScopedI18n } from "@/lib/next-international";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/ui/hover-card";
import { Typography } from "@/ui/typography";
import { SheetContent } from "@/ui/sheet";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"

export const Sidebar = () => {
  const [side, setSide] = useState<'right' | 'bottom'>('right');

  const servicalT = useScopedI18n('servical')

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setSide(screenWidth < 1024 ? 'bottom' : 'right');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SheetContent side={side} className="p-0 h-[440px] lg:h-screen">
      <div className="flex flex-col bg-neutral-600 dark:bg-neutral-900 pb-4 lg:h-full">
        <div className="flex flex-col overflow-hidden h-[196px]">
          <Image
            loading="lazy"
            width={480}
            height={196}
            className="object-cover w-full"
            src="https://cdn.discordapp.com/attachments/904344676587417621/1196494789525393479/doc_2024-01-15_19-40-17.gif?ex=65b7d59b&is=65a5609b&hm=ccb00591b9fccb4f573c17cad1e4cc3184b1947d2019fa7a36a8d387fe1eeb4a&"
            alt="Cat chilled"
          />
        </div>
        <div className="relative -top-14 left-4 w-[112px] h-[112px] overflow-hidden rounded-full border-4 dark:border-neutral-900 border-neutral-600">
          <Image
            alt="Profile Avatar"
            src="https://cdn.discordapp.com/attachments/904344676587417621/1196940894398587031/fb5da2ff-f758-4ff7-b27b-5f4bf9f969e8.jpg?ex=65b97513&is=65a70013&hm=d0068b8ecddc669554735f3622b2ad2a1a9cde5336e3802554bc1c5c8dd09198&"
            width={112}
            height={112}
            className="w-full h-full object-cover cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="relative -top-8 mx-4 p-4 bg-black/80 rounded-xl flex flex-col">
          <div className="flex flex-col w-full">
            <Typography className="text-xl lg:text-2xl">
              Белкин
            </Typography>
            <HoverCard openDelay={1} closeDelay={1}>
              <HoverCardTrigger className="cursor-default">
                <Typography font="normal" className="text-md lg:text-lg text-white">
                  pureawake/he/her
                </Typography>
              </HoverCardTrigger>
              <HoverCardContent className="border-0 relative -top-14 -left-20 p-1 m-0 w-max bg-black/90">
                <Typography className="text-md text-neutral-400">
                  {servicalT('pronouns')}
                </Typography>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="relative -top-4 mx-4 p-4 overflow-hidden rounded-xl bg-black/80">
          <Typography className="text-md lg:text-lg text-white cursor-default">
            {servicalT('about me')}:
          </Typography>
          <div className="flex flex-col w-full">
            <Typography font="normal" className="text-white text-md">
              Абоба. Кстати, вот мой проектик:&nbsp;
              <Link href="https://fasberry.ru/" target="_blank" className="hover:underline">
                https://fasberry.ru
              </Link>
            </Typography>
          </div>
        </div>
        <div className="relative -top-0 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
          <Typography className="text-md lg:text-lg text-white cursor-default">
            {servicalT('Currently listening on Spotify')}:
          </Typography>
          <Track />
        </div>
        <div className="relative top-4 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
          <Typography className="text-md lg:text-lg text-white cursor-default">
            {servicalT('settings')}:
          </Typography>
          <div className="flex items-center gap-x-4">
            <Language />
            <Theme />
          </div>
        </div>
      </div>
    </SheetContent>
  )
}