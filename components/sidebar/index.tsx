import Image from "next/image"
import { Track } from "@/components/entities/track";
import { Language } from "@/features/language-switch"
import { Theme } from "@/features/theme-switch";
import { useScopedI18n } from "@/lib/next-international";
import { 
  HoverCard,
  HoverCardContent, 
  HoverCardTrigger 
} from "@/ui/hover-card";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/ui/dialog";
import { 
  Carousel, 
  CarouselContent,
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/ui/carousel";
import { data } from "@/content/gallery";

export const RightPanel = () => {
  const servicalT = useScopedI18n('servical')

  return (
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
        <Dialog>
          <DialogTrigger>
            <Image
              alt="Profile Avatar"
              src="https://cdn.discordapp.com/attachments/904344676587417621/1196940894398587031/fb5da2ff-f758-4ff7-b27b-5f4bf9f969e8.jpg?ex=65b97513&is=65a70013&hm=d0068b8ecddc669554735f3622b2ad2a1a9cde5336e3802554bc1c5c8dd09198&"
              width={112}
              height={112}
              className="w-full h-full object-cover cursor-pointer"
              loading="lazy"
            />
          </DialogTrigger>
          <DialogContent className="mx-auto w-[86%]">
            <Carousel>
              <CarouselContent className="flex gap-x-4">
                {data.map((item, idx) => (
                  <CarouselItem key={idx} className="p-0">
                    <Image
                      src={item}
                      alt="Telegram Photos"
                      width={1000}
                      height={1000}
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative -top-8 mx-4 p-4 bg-black/80 rounded-xl flex flex-col">
        <div className="flex flex-col w-full">
          <p className="font-medium text-xl lg:text-2xl text-white">
            Белкин
          </p>
          <HoverCard openDelay={1} closeDelay={1}>
            <HoverCardTrigger className="cursor-default">
              <p className="font-normal text-md lg:text-lg text-white">
                pureawake/he/her
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="border-0 relative -top-14 -left-20 p-1 m-0 w-max bg-black/90">
              <p className="text-md text-neutral-400">
                {servicalT('pronouns')}
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div className="relative -top-4 mx-4 p-4 overflow-hidden rounded-xl bg-black/80">
        <p className="font-medium text-md lg:text-lg text-white cursor-default">
          {servicalT('about me')}:
        </p>
        <div className="flex flex-col w-full">
          <p className="text-white text-md">
            Абоба. Кстати, вот мой проектик:&nbsp;
            <a href="https://fasberry.ru/" target="_blank" className="hover:underline">
              https://fasberry.ru
            </a>
          </p>
        </div>
      </div>
      <div className="relative -top-0 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
        <p className="font-medium text-md lg:text-lg text-white cursor-default">
          {servicalT('Currently listening on Spotify')}:
        </p>
        <Track />
      </div>
      <div className="relative top-4 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
        <p className="font-medium text-md lg:text-lg text-white cursor-default">
          {servicalT('settings')}:
        </p>
        <div className="flex items-center gap-x-4">
          <Language />
          <Theme />
        </div>
      </div>
    </div>
  )
}