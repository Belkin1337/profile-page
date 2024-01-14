// import Contacts from '@/components/layout/contacts/contacts';
import Projects from '@/components/layout/projects/projects';
import About from '@/components/layout/about/about';
import Skills from '@/components/layout/skills/skills';
import useSWR from "swr";
import Interests from '@/components/layout/interests/interests';
import { Header } from '@/components/header';
import { CurrentTrack } from '@/components/current-track';

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/now-playing", fetcher);

  return (
    <body className="theme bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]">
      <Header data={data} />
      <About />
      <Skills />
      {/* <Interests /> */}
      <Projects />
    </body>
  )
}
