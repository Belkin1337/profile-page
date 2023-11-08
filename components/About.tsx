import { useState } from "react"
import Link from "next/link";
import { useScopedI18n, useCurrentLocale } from '@/lib/next-international'

import "keen-slider/keen-slider.min.css"

import { BlockCard } from "./ui/blockCard";

import ToolsPanel from "./custom-ui/tools-panel";
import BaseAvatar from "./custom-ui/base-avatar";
import Card from "./custom-ui/card";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whoisT = useScopedI18n('whois')
  const locale = useCurrentLocale()
  const servicalT = useScopedI18n('servical')
  const generalT = useScopedI18n('general')

  const toggleDescription = () => { setIsOpen(!isOpen) };

  const specials = [
    whoisT('genius'),
    whoisT('sage'),
    whoisT('minecraft player'),
    whoisT('minecraft server developer'),
    whoisT('owner of a youTube channel'),
    whoisT('almost a streamer'),
    whoisT('kind'),
    whoisT('polite'),
    whoisT('rofler'),
    whoisT('something else...'),
  ]

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
      title: generalT('youtube'), anchor: "youtube", description: "Ютубчик", full: [
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
      <div className="flex flex-col w-[90%] justify-between gap-y-8">
        <div className="flex flex-col lg:flex-row lg:px-4 py-8 bg-gradient-to-l from-gray-900 to-gray-600 rounded-lg gap-4 items-center overflow-hidden w-full ">
          <BaseAvatar/>
          <Card size="sm" className="hidden xl:flex absolute right-0 top-[96px] p-1 bg-neutral-800">
            <ToolsPanel isDesktop />
          </Card>
          <div className="flex flex-col px-2 items-start justify-center w-full lg:w-1/2">
            <h1 className="text-small md:text-[2.6rem] text-sea text-[1.6rem] mb-6">{generalT('Q')}&nbsp;
              <span className={`${locale === 'ru' ? 'welcoming-ru' : 'welcoming-en'}`} />
            </h1>
            <div className="flex flex-col">
              <h2 className={isOpen ? 'hidden' : 'text-[1.2rem] md:text-[2rem] text-pink'}>
                {specials.slice(0, 3).join(', ') + '...'}
                <button onClick={toggleDescription} className={isOpen ? 'hidden' : 'text-servical-button'}>
                  [{servicalT('expand')}]
                </button>
              </h2>
              <h2 className={isOpen ? 'text-[1.2rem] md:text-[2rem] text-pink' : 'hidden'}>
                {specials.join(', ')}
                <button onClick={toggleDescription} className={isOpen ? 'text-servical-button' : 'hidden'}>
                  [{servicalT('hide')}]
                </button>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-l from-gray-900 to-gray-600 rounded-lg cardElement py-6 px-4 xl:px-8 gap-y-4">
          <h1 className="text-white text-[1.4rem] xl:text-[2rem]">{generalT('title')}</h1>
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 xl:items-center">
            {tm_Skills.map((skill: any) => (
              <Link key={skill.title} href={`#` + skill.anchor}>
                <BlockCard
                  className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-400 via-pink to-amber-300"
                  size="rectangle">
                  {skill.title}
                </BlockCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About