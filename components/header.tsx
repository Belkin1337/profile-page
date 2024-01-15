import Image from "next/image"
import { Braces } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RightPanel } from "./right-panel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useScopedI18n } from "@/lib/next-international";
import { useEffect, useState } from "react";

export const Header = () => {
  const [side, setSide] = useState<'right' | 'bottom'>('right'); 
  const servicalT = useScopedI18n('servical')

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setSide(screenWidth < 720 ? 'bottom' : 'right');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <Sheet>
      <div className="fixed top-0 right-0 left-0 w-full bg-neutral-950/80 backdrop-filter backdrop-blur-md z-20">
        <div className="flex items-center w-[90%] mx-auto py-2 justify-between">
          <div className="flex gap-x-4 items-center">
            <div className="overflow-hidden rounded-xl border-2 border-transparent cursor-pointer 
            hover:border-b-MAIN_PINK hover:border-r-MAIN_PINK hover:duration-300 duration-300">
              <Image src="/favicon.png" width={52} height={52} alt="pureawake avatar" />
            </div>
            <p className="text-white text-xl font-bold">dev/pureawake</p>
          </div>
          <SheetTrigger>
            <HoverCard openDelay={1} closeDelay={1}>
              <HoverCardTrigger>
                <Braces size={24} color="white" />
              </HoverCardTrigger>
              <HoverCardContent className="border-0 p-1 m-0 w-max bg-black/90">
                <p className="text-md text-neutral-400">{servicalT('widget')}</p>
              </HoverCardContent>
            </HoverCard>
          </SheetTrigger>
        </div>
      </div>
      <SheetContent side={side} className="pl-1 pr-0 py-0 border-0 m-0 bg-gradient-to-tl rounded-none from-stone-500 via-cyan-500 overflow-y-auto to-green-300">
        <RightPanel/>
      </SheetContent>
    </Sheet>
  )
}