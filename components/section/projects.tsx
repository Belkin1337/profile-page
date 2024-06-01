import { useScopedI18n } from "@/lib/i18n/i18n";
import { Title } from "@/ui/components/title"
import { projectsData } from "@/shared/content/projects";
import dynamic from "next/dynamic";

const InfiniteMovingCards = dynamic(() => import("@/ui/components/infinite-moving-cards")
  .then(m => m.InfiniteMovingCards))

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