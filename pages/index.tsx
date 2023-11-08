import Contacts from '@/components/contacts';
import ProjectsSection from '@/components/projects';
import About from '@/components/about';
import Skills from '@/components/skills';
import Interests from '@/components/interests';
import Header from '@/components/custom-ui/header';
import ProgressBar from '@/components/custom-ui/progress-bar';

export default function Home() {
  return (
    <>
      <ProgressBar/>
      <Header/>
      <About />
      <Skills />
      <Interests />
      <ProjectsSection />
      <Contacts />
    </>
  )
}
