// import Contacts from '@/components/layout/contacts/contacts';
import Projects from '@/components/layout/projects/projects';
import About from '@/components/layout/about/about';
import Skills from '@/components/layout/skills/skills';
import Interests from '@/components/layout/interests/interests';

export default function Home() {
  return (
    <body className="theme bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]">
      <About />
      <Skills />
      <Interests />
      <Projects />
    </body>
  )
}
