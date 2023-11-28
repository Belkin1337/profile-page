import { useScopedI18n } from "@/lib/next-international"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Title from "@/components/ui/title"
import { Wrapper } from "@/components/ui/wrapper"
import ProjectCard from "@/components/ui/project-card"

const Projects = () => {
  const titleT = useScopedI18n('title');
  const projectsT = useScopedI18n('projects');

  const animation = { duration: 96000, easing: (t: number) => t }

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    breakpoints: {
      "(min-width: 320px)": { slides: { perView: 1, spacing: 24 }, },
      "(min-width: 400px)": { slides: { perView: 1, spacing: 24 }, },
      "(min-width: 1000px)": { slides: { perView: 2, spacing: 24 }, },
    },
    created(s) { s.moveToIdx(2, true, animation) },
    updated(s) { s.moveToIdx(s.track.details.abs + 2, true, animation) },
    animationEnded(s) { s.moveToIdx(s.track.details.abs + 2, true, animation) },
  })

  const projectsData = [
    {
      id: "frontend", 
      name: projectsT('spotify.title'), 
      description: projectsT('spotify.description'),
      image: "/images/projects/almost-spotify.png",
      tags: ["#react", "#nextjs/app", "#tailwindcss", "#supabase", "#postgresql", "#mongodb"],
      demos: "https://spotify-maybe.vercel.app", sourceCode: "https://github.com/Belkin1337/almost-spotify-clone"
    },
    {
      id: "frontend", 
      name: projectsT('fasberryWeb.title'), 
      description: projectsT('fasberryWeb.description'),
      image: "/images/projects/fasberrypreview.png",
      tags: ["#react", "#nextjs/pages", "#tailwindcss", "#shadcnUI", "#dnd"],
      demos: "https://fasberry.ru", sourceCode: "/"
    },
    {
      id: "frontend", 
      name: projectsT('profilepage.title'), 
      description: projectsT('profilepage.description'),
      image: "/images/projects/profilepreview.png",
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
            <ProjectCard 
              key={idx}
              id={item.id}
              title={item.name}
              description={item.description}
              image={item.image}
              source={item.sourceCode}
              demo={item.demos}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Projects;