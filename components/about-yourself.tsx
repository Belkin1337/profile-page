import { useScopedI18n, useCurrentLocale } from '@/lib/next-international'
import { useState } from 'react';

export const AboutYourself = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whoisT = useScopedI18n('whois')
  const locale = useCurrentLocale()
  const servicalT = useScopedI18n('servical')
  const generalT = useScopedI18n('general')

  const toggleDescription = () => { setIsOpen(!isOpen) };

  const specials = [
    whoisT('frontend dev'), whoisT('almost a web designer'), whoisT('gentleman'), 
    whoisT('sage'), whoisT('own a computer'),
    whoisT('human XXI'), whoisT('minecrafter')
  ];

  return (
    <div className="flex flex-col pl-2 items-start justify-end w-full lg:w-1/2 h-max relative">
      <h1 className="text-small lg:text-[2.6rem] text-[1.6rem] mb-6 text-white dark:text-white font-medium">
        {generalT('Q')}&nbsp;
        <span className={`${locale === 'ru' ? 'welcoming-ru' : 'welcoming-en'}`} />
      </h1>
      <div className="flex flex-col">
        <h2 className={isOpen ? 'hidden' : 'text-[1rem] lg:text-[2rem] font-normal text-white'}>
          {specials.slice(0, 3).join(', ') + '...'}
          <button onClick={toggleDescription} className={isOpen ? 'hidden' : 'text-neutral-400'}>
            &nbsp;[{servicalT('expand')}]
          </button>
        </h2>
        <h2 className={isOpen ? 'text-[1.2rem] lg:text-[2rem] font-normal text-white' : 'hidden'}>
          {specials.join(', ') + '.'}
          <button onClick={toggleDescription} className={isOpen ? 'text-neutral-400' : 'hidden'}>
           [{servicalT('hide')}]
          </button>
        </h2>
      </div>
    </div>
  )
}