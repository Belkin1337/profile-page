import Image from "next/image"
import Link from "next/link";
import dynamic from 'next/dynamic'
import { useScopedI18n } from "@/lib/next-international";
import {
  Sheet,
  SheetTrigger
} from "@/ui/sheet";
import { Braces, Github } from 'lucide-react';
import { Typography } from "@/ui/typography";
import { GITHUB_PROFILE_LINK } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { LuSend } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";

const Sidebar = dynamic(() =>
  import('@/components/layout/sidebar/index').then((mod) => mod.Sidebar)
)

export const Header = () => {
  const servicalT = useScopedI18n('servical')

  return (
    <Sheet>
      <div className="fixed top-0 right-0 left-0 w-full bg-neutral-950/80 backdrop-filter backdrop-blur-md z-20">
        <div className="flex items-center w-[90%] mx-auto py-2 justify-between">
          <Link href="/" className="flex gap-x-2 lg:gap-x-4 items-center">
            <div className="overflow-hidden rounded-xl border-2 border-transparent cursor-pointer 
            hover:border-b-MAIN_PINK hover:border-r-MAIN_PINK hover:duration-300 duration-300">
              <Image src="/favicon.png" width={42} height={42} alt="pureawake avatar" />
            </div>
            <Typography font="bold" variant="secondary" size="large">
              pureawake
            </Typography>
          </Link>
          <div className="flex gap-x-1 lg:gap-x-4 items-center">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href="/work"
                  className="hover:bg-neutral-800 hover:duration-200 duration-200 rounded-xl p-2 lg:p-4"
                >
                  <LuSend size={24} color="white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <Typography variant="secondary">
                  Обратная связь/заказы
                </Typography>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href="/support"
                  className="hover:bg-neutral-800 hover:duration-200 duration-200 rounded-xl p-2 lg:p-4"
                >
                  <MdAttachMoney size={24} color="white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <Typography variant="secondary">
                  Задонатить
                </Typography>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={GITHUB_PROFILE_LINK}
                  className="hover:bg-neutral-800 hover:duration-200 duration-200 rounded-xl p-2 lg:p-4"
                >
                  <Github size={24} color="white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <Typography variant="secondary">
                  Исходники
                </Typography>
              </TooltipContent>
            </Tooltip>
            <SheetTrigger>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div className="hover:bg-neutral-800 rounded-xl p-2 lg:p-4 hover:duration-200 duration-200">
                    <Braces size={24} color="white" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <Typography variant="secondary">
                    {servicalT('widget')}
                  </Typography>
                </TooltipContent>
              </Tooltip>
            </SheetTrigger>
          </div>
        </div>
      </div>
      <Sidebar />
    </Sheet>
  )
}