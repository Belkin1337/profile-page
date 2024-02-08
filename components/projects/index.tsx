import { useScopedI18n } from "@/lib/next-international"
import { useKeenSlider } from "keen-slider/react"
import { Title } from "@/ui/title"
import { Wrapper } from "@/ui/wrapper"
import { ProjectCard } from "@/components/entities/project-card"
import { data } from "@/content/projects"
import "keen-slider/keen-slider.min.css"

const animation = {
  duration: 96000,
  easing: (t: number) => t
}

export const Projects = () => {
  const titleT = useScopedI18n('title');
  const projectsT = useScopedI18n('projects');

  const projectsArr = data(projectsT);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: {
          perView: 1,
          spacing: 24
        },
      },
      "(min-width: 400px)": {
        slides: {
          perView: 1,
          spacing: 24
        },
      },
      "(min-width: 1000px)": {
        slides: {
          perView: 2,
          spacing: 24
        },
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

  return (
    <Wrapper>
      <Title titleBody={titleT('projects.title')} subtitleBody={titleT('projects.subtitle')} />
      <div ref={sliderRef} className="keen-slider flex flex-row items-center justify-start">
        {projectsArr.map((item, idx) => (
          <div key={idx} className="keen-slider__slide">
            <ProjectCard
              key={idx}
              title={item.name}
              description={item.description}
              image={item.image}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}