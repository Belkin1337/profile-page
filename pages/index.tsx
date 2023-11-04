import ContactsSection from '@/components/Contacts';
import ProjectsSection from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Interests from '@/components/Interests';
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
      <ContactsSection />
    </>
  )
}
