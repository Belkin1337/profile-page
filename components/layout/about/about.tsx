import { useScopedI18n } from '@/lib/next-international'
import "keen-slider/keen-slider.min.css"

import { BlockCard } from "@/components/ui/block-card";
import { BaseAvatar } from "@/components/ui/base-avatar";
import { AboutYourself } from "@/components/about-yourself";

const About = () => {
  const generalT = useScopedI18n('general')
  const servicalT = useScopedI18n('servical');

  const tm_Skills = [
    {
      title: generalT('web'),
      since: 2023,
      full: [
        { name: "HTML + CSS", time: "Июнь, 2023" },
        { name: "React", time: "Июль, 2023" },
        { name: "NextJS", time: "Август, 2023" },
      ]
    },
    {
      title: generalT('minecraft'),
      since: 2012,
      full: [
        { name: "Первый вход в игру", time: "~2013" },
        { name: "Знакомство с серверами", time: "~2013" },
        { name: "Первое прохождение", time: "~2015" },
        { name: "Уход в чистый сурв", time: "~2018" },
        { name: "Мысли о создании проекта", time: "конец 2021" },
      ]
    },
    {
      title: generalT('youtube'),
      since: 2020,
      full: [
        { name: "Регистрация на платформе", time: "5 апреля 2014" },
        { name: "Первое видео", time: "~2017" },
        { name: "Первый хайповый видос", time: "10 декабря, 2020" },
        { name: "Уход в создание нарезок", time: "~март, 2021" },
        { name: "5.000 подписчиков на канале", time: "март, 2022" },
      ]
    },
    {
      title: generalT('java'),
      since: 2022,
    },
    {
      title: generalT('music'),
      since: 2021,
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
    <section className="flex flex-col justify-center items-center min-h-screen pt-24 pb-4">
      <div className="flex flex-col w-[90%] justify-center gap-y-8">
        <div className="lg:px-1 py-1 overflow-hidden bg-gradient-to-tl rounded-xl from-stone-500 via-cyan-500 to-green-300">
          <div className="flex flex-col lg:flex-row items-center lg:px-3 rounded-xl py-7 w-full h-full bg-neutral-700 dark:bg-neutral-950 justify-between">
            <div className="flex flex-col lg:flex-row items-center">
              <BaseAvatar />
              <AboutYourself />
            </div>
          </div>
        </div>
        <div className="py-1 xl:px-1 bg-gradient-to-tl rounded-xl from-stone-500 via-cyan-500 to-green-300">
          <div className="flex flex-col gap-y-4 xl:px-7 px-3 py-5 rounded-xl bg-neutral-700 dark:bg-neutral-950">
            <h1 className="text-white text-[1.4rem] xl:text-[2rem]">{generalT('title')}</h1>
            <div className="flex flex-wrap gap-4 xl:items-center">
              {tm_Skills.map((item) => (
                <div key={item.title} className="flex flex-row gap-x-4 md:flex-col border border-neutral-700 w-full md:w-max bg-neutral-800 p-2 md:p-4 rounded-xl items-center">
                  <p className="text-xl md:text-2xl text-white">{item.title}</p>
                  <p className="text-lg md:text-xl text-neutral-400">({servicalT('since')} {item.since})</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;