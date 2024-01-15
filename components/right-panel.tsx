import Image from "next/image"
import { CurrentTrack } from "./current-track";
import { Language } from "./tools/language"
import { Theme } from "./tools/theme";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useScopedI18n } from "@/lib/next-international";

export const RightPanel = () => {
  const servicalT = useScopedI18n('servical')

  return (
    <div className="flex flex-col bg-neutral-600 dark:bg-neutral-900 h-full pb-4">
      <div className="flex flex-col overflow-hidden h-[196px]">
        <Image
          loading="lazy"
          width={480}
          height={196}
          className="object-cover w-full"
          src="https://cdn.discordapp.com/attachments/904344676587417621/1196494789525393479/doc_2024-01-15_19-40-17.gif?ex=65b7d59b&is=65a5609b&hm=ccb00591b9fccb4f573c17cad1e4cc3184b1947d2019fa7a36a8d387fe1eeb4a&"
          alt="Cat chilled" />
      </div>
      <div className="relative -top-14 left-4 w-[112px] h-[112px] overflow-hidden rounded-full border-4 dark:border-neutral-900 border-neutral-600">
        <Image alt="Profile Avatar" src="/images/avatars/avatar2.jpg" width={112} height={112} className="w-full h-full object-cover" />
      </div>
      <div className="relative -top-8 mx-4 p-4 bg-black/80 rounded-xl flex flex-col">
        <div className="flex flex-col w-full">
          <p className="font-medium text-xl lg:text-2xl text-white">Белкин</p>
          <HoverCard openDelay={1} closeDelay={1}>
            <HoverCardTrigger className="cursor-default">
              <p className="font-normal text-md lg:text-lg text-white">pureawake/he/her</p>
            </HoverCardTrigger>
            <HoverCardContent className="border-0 relative -top-14 -left-20 p-1 m-0 w-max bg-black/90">
              <p className="text-md text-neutral-400">{servicalT('pronouns')}</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div className="relative -top-4 mx-4 p-4 overflow-hidden rounded-xl bg-black/80">
        <p className="font-medium text-md lg:text-lg text-white cursor-default">{servicalT('about me')}:</p>
        <div className="flex flex-col w-full">
          <p className="text-white text-md">Абоба. Кстати, вот мой проектик:&nbsp;
            <a href="https://fasberry.ru/" target="_blank" className="hover:underline">https://fasberry.ru</a>
          </p>
        </div>
      </div>
      <div className="relative -top-0 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
        <p className="font-medium text-md lg:text-lg text-white cursor-default">{servicalT('Currently listening on Spotify')}:</p>
        <CurrentTrack/>
      </div>
      <div className="relative top-4 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
        <p className="font-medium text-md lg:text-lg text-white cursor-default">{servicalT('settings')}:</p>
        <div className="flex items-center gap-x-4">
          <Language />
          <Theme />
        </div>
      </div>
    </div>
  )
}