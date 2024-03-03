import { interestsData, specials, words } from "@/content/about/interests"
import { useScopedI18n } from "@/lib/next-international"
import { BaseAvatar } from "@/ui/base-avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip"
import { TypewriterEffect } from "@/ui/typewriter-effect"
import { Typography } from "@/ui/typography"
import { useState } from "react"
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go"

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
          <div className="flex flex-col lg:flex-row items-center lg:px-4 py-8 rounded-xl bg-neutral-700 dark:bg-neutral-950">
            <BaseAvatar />
            <div className="p-4 flex flex-col gap-y-4 items-start justify-start lg:w-3/4 w-full h-full">
              <TypewriterEffect words={words(generalT)} />
              <div className="flex flex-col gap-y-2">
                <Typography font="normal" className="text-[1.1rem] lg:text-[2rem]">
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
          <div className="flex flex-col gap-y-4 xl:px-7 px-3 py-5 rounded-xl bg-neutral-700 dark:bg-neutral-950">
            <Typography className="text-white text-[1.4rem] xl:text-[2rem]">
              {generalT('title')}
            </Typography>
            <div className="flex flex-wrap gap-4 xl:items-center">
              {interestsArr.map(item => (
                <div key={item.title} className="flex flex-row gap-x-4 md:flex-col border border-neutral-700 w-full md:w-max bg-neutral-800 p-2 md:p-4 rounded-xl items-center">
                  <Typography variant="subtitle">
                    {item.title}
                  </Typography>
                  <Typography col="gray" className="text-lg md:text-xl">
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