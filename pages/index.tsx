import Contacts from '@/components/layout/contacts/contacts';
import Projects from '@/components/layout/projects/projects';
import About from '@/components/layout/about/about';
import Skills from '@/components/layout/skills/skills';
import Interests from '@/components/layout/interests/interests';
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
      <Projects />
      {/* <Contacts /> */}
    </>
  )
}
