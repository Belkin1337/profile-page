import { useScopedI18n } from "@/lib/i18n/i18n"
import { BaseAvatar } from "@/ui/components/base-avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/components/tooltip"
import { TypewriterEffect } from "@/ui/components/typewriter-effect"
import { Typography } from "@/ui/components/typography"
import { useState } from "react"
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go"
import { interestsData, specials, words } from "@/shared/content/interests";

export const AboutSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const servicalT = useScopedI18n('servical')
  const whoisT = useScopedI18n('whois')
  const generalT = useScopedI18n('general')
  const interestsArr = interestsData(generalT)
  const specialsArr = specials(whoisT)

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      <div className="pt-24 lg:pt-0 flex flex-col w-full justify-center gap-y-8">
        <div className="p-1 overflow-hidden bg-gradient-to-tl w-full rounded-xl from-stone-500 via-cyan-500 to-green-300">
          <div className="flex flex-col lg:flex-row items-center lg:px-4 py-8 rounded-xl bg-neutral-50 dark:bg-neutral-950">
            <BaseAvatar />
            <div className="p-4 flex flex-col gap-y-4 items-start justify-start lg:w-3/4 w-full h-full">
              <TypewriterEffect words={words(generalT)} />
              <div className="flex flex-col gap-y-2">
                <Typography font="normal" className="text-black dark:text-white text-[1.1rem] lg:text-[2rem]">
                  {isOpen ? (
                    specialsArr.slice(0, 3).join(', ') + '...'
                  ) : (
                    specialsArr.join(', ') + '.'
                  )}
                </Typography>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger className="w-min">
                    {isOpen ? (
                      <GoArrowUpRight
                        size={24}
                        onClick={() => setIsOpen(!isOpen)}
                      />
                    ) : (
                      <GoArrowDownLeft
                        size={24}
                        onClick={() => setIsOpen(!isOpen)}
                      />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    {servicalT('hide')}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="py-1 xl:px-1 bg-gradient-to-tl rounded-xl from-stone-500 via-cyan-500 to-green-300">
          <div className="flex flex-col gap-y-4 xl:px-7 px-3 py-5 rounded-xl bg-neutral-50 dark:bg-neutral-950">
            <Typography className="text-black dark:text-white text-[1.4rem] xl:text-[2rem]">
              {generalT('title')}
            </Typography>
            <div className="flex flex-wrap gap-4 xl:items-center">
              {interestsArr.map(item => (
                <div key={item.title} className="flex flex-row gap-x-4 md:flex-col w-full md:w-max bg-neutral-300 dark:bg-neutral-800 px-3 py-1 rounded-xl items-center">
                  <Typography variant="subtitle" className="text-black dark:text-white">
                    {item.title}
                  </Typography>
                  <Typography className="text-md text-neutral-600 dark:text-neutral-400">
                    ({servicalT('since')} {item.since})
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}