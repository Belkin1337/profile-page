// import Contacts from '@/components/layout/contacts/contacts';
import { Projects } from '@/components/projects';
import { Skills }  from '@/components/skills';
// import Interests from '@/components/layout/interests/interests';
import { Header } from '@/components/layout/header';
import { About } from '@/components/about';

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
