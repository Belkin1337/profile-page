import Link from "next/link"
import { useScopedI18n } from "@/lib/next-international"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { Badge } from "@/components/ui/badge"
import Title from "@/components/ui/title"

import Card from "@/components/custom-ui/card"
import { Wrapper } from "@/components/ui/wrapper"

import fasberrypreview from "@/public/images/fasberrypreview.png"
import profilepreview from "@/public/images/profilepreview.png"
import spotifyclone from "@/public/images/almost-spotify.png"

const Projects = () => {
  const servicalT = useScopedI18n("servical");
  const titleT = useScopedI18n('title');
  const projectsT = useScopedI18n('projects');

  const animation = { duration: 96000, easing: (t: number) => t }

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
    created(s) {
      s.moveToIdx(2, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation)
    },
  })

  const projectsData = [
    {
      id: "frontend", name: projectsT('spotify.title'), description: projectsT('spotify.description'),
      image: spotifyclone,
      tags: ["#react", "#nextjs/app", "#tailwindcss", "#supabase", "#postgresql", "#mongodb"],
      demos: "https://spotify-maybe.vercel.app", sourceCode: "https://github.com/Belkin1337/almost-spotify-clone"
    },
    {
      id: "frontend", name: projectsT('fasberryWeb.title'), description: projectsT('fasberryWeb.description'),
      image: fasberrypreview,
      tags: ["#react", "#nextjs/pages", "#tailwindcss", "#shadcnUI", "#dnd"],
      demos: "https://fasberry.ru", sourceCode: "/"
    },
    {
      id: "frontend", name: projectsT('profilepage.title'), description: projectsT('profilepage.description'),
      image: profilepreview,
      tags: ["#react", "#nextjs/pages", "#tailwindcss", "#postgresql", "#shadcnUI", "#actix"],
      demos: "https://pureawake.ru", sourceCode: "https://github.com/Belkin1337/profile-page"
    },
  ]

  return (
    <Wrapper>
      <Title titleBody={titleT('projects.title')} subtitleBody={titleT('projects.subtitle')} />
      <div ref={sliderRef} className="keen-slider flex flex-row items-center justify-start">
        {projectsData.map((item, idx) => (
          <div key={idx} className="keen-slider__slide">
            <Card
              id={item.id} 
              padding="none" className="flex items-center justify-start relative overflow-hidden group"
            >
              <img src={item.image.src} alt="" className="rounded-lg" />
              <div className="flex flex-col py-4 cursor-pointer px-4 items-start justify-between w-full h-full absolute z-10 
              bg-black/80 group-hover:opacity-100 opacity-0 group-hover:transition group-hover:duration-500 duration-500 transition"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-[1.2rem] md:text-[1.8rem] text-sea font-normal">
                    {item.name}
                  </p>
                  <p className="text-[1rem] md:text-[1.5rem] text-white">
                    {item.description}
                  </p>
                  <div className="flex flex-row flex-wrap gap-2 mt-4">
                    {item.demos || item.sourceCode ? (
                      <>
                        <Link
                          target="_blank"
                          href={item.demos}
                          className={`${item.demos.length !== 0
                            ? "text-black text-[1.4rem] px-4 lg:px-12 py-1 wisteria-badge"
                            : "hidden"}`}
                        >
                          {servicalT('demo')}
                        </Link>
                        <Link
                          target="_blank"
                          href={item.sourceCode}
                          className={`${item.sourceCode.length !== 0
                            ? "text-black text-[1.4rem] px-4 lg:px-12 py-1 wisteria-badge"
                            : "hidden"}`}
                        >
                          {servicalT('sources')}
                        </Link>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center gap-x-2 gap-y-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Projects;