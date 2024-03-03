import { Header } from '@/components/layout/header';
import { Wrapper } from '@/ui/wrapper';
import { DotBackgroundDemo } from '@/ui/dot-background';
import { AboutSection } from '@/components/section/about';
import dynamic from 'next/dynamic';

// const FeedbackSection = dynamic(() =>
//   import('@/components/section/feedback').then((mod) => mod.FeedbackSection)
// )

const ProjectsSection = dynamic(() =>
  import('@/components/section/projects').then((mod) => mod.ProjectsSection)
)

const SkillsSection = dynamic(() =>
  import('@/components/section/skills').then((mod) => mod.SkillsSection)
)

export default function Home() {
  return (
    <Wrapper>
      <AboutSection />
      <SkillsSection />
      {/* Interests Section
        <Title id="interests" titleBody={titleT('interests.title')} subtitleBody={titleT('interests.subtitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 auto-rows-auto w-full gap-4">
        </div> */}
      <ProjectsSection />
      {/* <FeedbackSection /> */}
    </Wrapper>
  )
}
