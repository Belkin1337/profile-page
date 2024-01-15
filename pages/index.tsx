// import Contacts from '@/components/layout/contacts/contacts';
import Projects from '@/components/layout/projects/projects';
import About from '@/components/layout/about/about';
import Skills from '@/components/layout/skills/skills';
// import Interests from '@/components/layout/interests/interests';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="theme bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]">
      <Header />
      <About />
      <Skills />
      {/* <Interests /> */}
      <Projects />
    </div>
  )
}
