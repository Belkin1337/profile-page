import { projectsData } from "@/content/projects";
import { useScopedI18n } from "@/lib/next-international";
import { InfiniteMovingCards } from "@/ui/infinite-moving-cards"
import { Title } from "@/ui/title"

export const ProjectsSection = () => {
  const titleT = useScopedI18n('title')
  const projectsT = useScopedI18n('projects');
  const projectsArr = projectsData(projectsT);

  return (
    <>
      <Title id="projects" titleBody={titleT('projects.title')} subtitleBody={titleT('projects.subtitle')} />
      <div className="flex flex-row items-center justify-start">
        <InfiniteMovingCards
          items={projectsArr}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  )
}