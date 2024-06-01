import { Wrapper } from '@/ui/components/wrapper';
import { AboutSection } from '@/components/section/about';
import dynamic from 'next/dynamic';
import Head from "next/head";
import { useScopedI18n } from "@/lib/i18n/i18n";

const ProjectsSection = dynamic(() =>
  import('@/components/section/projects').then((mod) => mod.ProjectsSection)
)

const SkillsSection = dynamic(() =>
  import('@/components/section/skills').then((mod) => mod.SkillsSection)
)

export default function Home() {
  const metadataT = useScopedI18n("metadata");

  return (
    <>
      <Head>
        <meta
          name="description"
          content={metadataT("description")}
        />
        <meta
          property="twitter:description"
          content={metadataT("description")}
        />
        <meta
          property="og:description"
          content={metadataT("description")}
        />
      </Head>
      <Wrapper>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection />
      </Wrapper>
    </>
  )
}