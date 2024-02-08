export const data = (generalT: Function) => {
  return [
    {
      title: generalT("web"),
      since: 2023,
      full: [
        { name: "HTML + CSS", time: "Июнь, 2023" },
        { name: "React", time: "Июль, 2023" },
        { name: "NextJS", time: "Август, 2023" },
      ],
    },
    {
      title: generalT("minecraft"),
      since: 2012,
      full: [
        { name: "Первый вход в игру", time: "~2013" },
        { name: "Знакомство с серверами", time: "~2013" },
        { name: "Первое прохождение", time: "~2015" },
        { name: "Уход в чистый сурв", time: "~2018" },
        { name: "Мысли о создании проекта", time: "конец 2021" },
      ],
    },
    {
      title: generalT("youtube"),
      since: 2020,
      full: [
        { name: "Регистрация на платформе", time: "5 апреля 2014" },
        { name: "Первое видео", time: "~2017" },
        { name: "Первый хайповый видос", time: "10 декабря, 2020" },
        { name: "Уход в создание нарезок", time: "~март, 2021" },
        { name: "5.000 подписчиков на канале", time: "март, 2022" },
      ],
    },
    {
      title: generalT("java"),
      since: 2022,
    },
    {
      title: generalT("music"),
      since: 2021,
      full: [
        { name: "Регистрация на платформе", time: "5 апреля 2014" },
        { name: "Первое видео", time: "~2017" },
        { name: "Первый хайповый видос", time: "10 декабря, 2020" },
        { name: "Уход в создание нарезок", time: "~март, 2021" },
        { name: "5.000 подписчиков на канале", time: "март, 2022" },
      ],
    },
  ];
};