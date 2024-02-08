import { useCurrentLocale, useScopedI18n } from '@/lib/next-international'
import { BaseAvatar } from "@/ui/base-avatar";
import { useState } from 'react';
import { data } from '@/content/about/interests';
import "keen-slider/keen-slider.min.css"

const specials = (whoisT: Function) => {
  return [
    whoisT('frontend dev'),
    whoisT('almost a web designer'),
    whoisT('gentleman'),
    whoisT('sage'),
    whoisT('own a computer'),
    whoisT('human XXI'),
    whoisT('minecrafter')
  ]
};

export const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const whoisT = useScopedI18n('whois')
  const locale = useCurrentLocale()
  const servicalT = useScopedI18n('servical')
  const generalT = useScopedI18n('general')

  const skillsArr = data(generalT)
  const specialsArr = specials(whoisT)

  return (
    <section className="flex flex-col justify-center items-center min-h-screen pt-24 pb-4">
      <div className="flex flex-col w-[90%] justify-center gap-y-8">
        <div className="lg:px-1 py-1 overflow-hidden bg-gradient-to-tl rounded-xl from-stone-500 via-cyan-500 to-green-300">
          <div className="flex flex-col lg:flex-row items-center lg:px-3 rounded-xl py-7 w-full h-full bg-neutral-700 dark:bg-neutral-950 justify-between">
            <div className="flex flex-col lg:flex-row items-center">
              <BaseAvatar />
              <div className="flex flex-col pl-2 items-start justify-end w-full lg:w-1/2 h-max relative">
                <h1 className="text-small lg:text-[2.6rem] text-[1.6rem] mb-6 text-white dark:text-white font-medium">
                  {generalT('Q')}&nbsp;
                  <span className={`${locale === 'ru' ? 'welcoming-ru' : 'welcoming-en'}`} />
                </h1>
                <div className="flex flex-col">
                  <h2 className={isOpen ? 'hidden' : 'text-[1rem] lg:text-[2rem] font-normal text-white'}>
                    {specialsArr.slice(0, 3).join(', ') + '...'}
                    <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'hidden' : 'text-neutral-400'}>
                      &nbsp;[{servicalT('expand')}]
                    </button>
                  </h2>
                  <h2 className={isOpen ? 'text-[1.2rem] lg:text-[2rem] font-normal text-white' : 'hidden'}>
                    {specialsArr.join(', ') + '.'}
                    <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'text-neutral-400' : 'hidden'}>
                      [{servicalT('hide')}]
                    </button>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-1 xl:px-1 bg-gradient-to-tl rounded-xl from-stone-500 via-cyan-500 to-green-300">
          <div className="flex flex-col gap-y-4 xl:px-7 px-3 py-5 rounded-xl bg-neutral-700 dark:bg-neutral-950">
            <h1 className="text-white text-[1.4rem] xl:text-[2rem]">{generalT('title')}</h1>
            <div className="flex flex-wrap gap-4 xl:items-center">
              {skillsArr.map(item => (
                <div key={item.title} className="flex flex-row gap-x-4 md:flex-col border border-neutral-700 w-full md:w-max bg-neutral-800 p-2 md:p-4 rounded-xl items-center">
                  <p className="text-xl md:text-2xl text-white">
                    {item.title}
                  </p>
                  <p className="text-lg md:text-xl text-neutral-400">
                    ({servicalT('since')} {item.since})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}