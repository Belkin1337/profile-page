import { useState } from "react"
import Link from "next/link";
import { useScopedI18n, useCurrentLocale } from '@/lib/next-international'
import "keen-slider/keen-slider.min.css"

import { BlockCard } from "@/components/ui/blockCard";
import BaseAvatar from "@/components/ui/base-avatar";
import ChangeTheme from "@/components/tools/change-theme";
import ChangeLang from "@/components/tools/change-lang";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whoisT = useScopedI18n('whois')
  const locale = useCurrentLocale()
  const servicalT = useScopedI18n('servical')
  const generalT = useScopedI18n('general')

  const toggleDescription = () => { setIsOpen(!isOpen) };

  const specials = [
    whoisT('genius'), whoisT('sage'), whoisT('minecraft player'), whoisT('minecraft server developer'), whoisT('owner of a youTube channel'),
    whoisT('almost a streamer'), whoisT('kind'), whoisT('polite'), whoisT('rofler'), whoisT('something else...'),
  ];

  const tm_Skills = [
    {
      title: generalT('frontend'),
      anchor: "frontend",
      description: "Веб типа",
      full: [
        { name: "HTML + CSS", time: "Июнь, 2023" },
        { name: "React", time: "Июль, 2023" },
        { name: "NextJS", time: "Август, 2023" },
      ]
    },
    { title: generalT('oc') },
    {
      title: generalT('minecraft'), anchor: "minecraft", description: "Майн",
      full: [
        { name: "Первый вход в игру", time: "~2013" },
        { name: "Знакомство с серверами", time: "~2013" },
        { name: "Первое прохождение", time: "~2015" },
        { name: "Уход в чистый сурв", time: "~2018" },
        { name: "Мысли о создании проекта", time: "конец 2021" },
      ]
    },
    {
      title: generalT('youtube'), anchor: "youtube", description: "Ютубчик",
      full: [
        { name: "Регистрация на платформе", time: "5 апреля 2014" },
        { name: "Первое видео", time: "~2017" },
        { name: "Первый хайповый видос", time: "10 декабря, 2020" },
        { name: "Уход в создание нарезок", time: "~март, 2021" },
        { name: "5.000 подписчиков на канале", time: "март, 2022" },
      ]
    },
    {
      title: generalT('music'), anchor: "music", description: "Ютубчик",
      full: [
        { name: "Регистрация на платформе", time: "5 апреля 2014" },
        { name: "Первое видео", time: "~2017" },
        { name: "Первый хайповый видос", time: "10 декабря, 2020" },
        { name: "Уход в создание нарезок", time: "~март, 2021" },
        { name: "5.000 подписчиков на канале", time: "март, 2022" },
      ]
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-4 sm:py-8 md:py-8 lg:py-8">
      <div className="flex flex-col w-[90%] justify-center gap-y-8">
        <div className="flex flex-col lg:flex-row items-center lg:px-4 py-8 overflow-hidden w-full h-full -lg bg-gradient-to-l from-gray-900 to-gray-600 justify-between">
          <div className="flex flex-col lg:flex-row items-center">
            <BaseAvatar />
            <div className="flex flex-col pl-2 items-start justify-end w-full lg:w-1/2 h-max relative">
              <h1 className="text-small lg:text-[2.6rem] text-[1.6rem] mb-6 text-MAIN_SEAWAVE">
                {generalT('Q')}&nbsp;
                <span className={`${locale === 'ru' ? 'welcoming-ru' : 'welcoming-en'}`} />
              </h1>
              <div className="flex flex-col">
                <h2 className={isOpen ? 'hidden' : 'text-[1rem] lg:text-[2rem] text-MAIN_PINK'}>
                  {specials.slice(0, 3).join(', ') + '...'}
                  <button onClick={toggleDescription} className={isOpen ? 'hidden' : 'text-SERVICE_BUTTON'}>
                    [{servicalT('expand')}]
                  </button>
                </h2>
                <h2 className={isOpen ? 'text-[1.2rem] lg:text-[2rem] text-MAIN_PINK' : 'hidden'}>
                  {specials.join(', ')}
                  <button onClick={toggleDescription} className={isOpen ? 'text-SERVICE_BUTTON' : 'hidden'}>
                    [{servicalT('hide')}]
                  </button>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end relative gap-2 -bottom-8 left-4 cursor-pointer bg-LIGHT_BACKGROUND/50 dark:bg-MAIN_BACKGROUND/50 h-max self-end">
            <ChangeTheme />
            <p className="text-neutral-400 text-[1rem] py-2">|</p>
            <ChangeLang />
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-l from-gray-900 to-gray-600 rounded-lg cardElement py-6 px-4 xl:px-8 gap-y-4">
          <h1 className="text-white text-[1.4rem] xl:text-[2rem]">{generalT('title')}</h1>
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 xl:items-center">
            {tm_Skills.map((item) => (
              <Link key={item.title} href={`#` + item.anchor}>
                <BlockCard
                  className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-400 via-pink to-amber-300"
                  padding="rectangle"
                >
                  {item.title}
                </BlockCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;