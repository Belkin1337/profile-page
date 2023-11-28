import { useScopedI18n } from "@/lib/next-international"

import TiltCard from '@/components/ui/tilt-card'
import { Wrapper } from "@/components/ui/wrapper"
import Title from "@/components/ui/title"

import { LiaLanguageSolid } from "react-icons/lia"
import { AiFillSetting } from "react-icons/ai"
import { VscTools } from "react-icons/vsc"
import { DatabaseBackup, LibrarySquare } from "lucide-react"

const Skills = () => {
  const titleT = useScopedI18n('title')
  const skillsT = useScopedI18n('skills');

  const skillsData = [
    {
      name: skillsT('languages'), icon: LiaLanguageSolid,
      content: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript" },
        { name: "Rust" },
        { name: "C#"}
      ]
    },
    {
      name: skillsT('frameworks'), icon: AiFillSetting,
      content: [
        { name: "React",  },
        { name: "NextJS", },
        { name: "NodeJS" },
        { name: "TailwindCSS" }
      ]
    },
    {
      name: skillsT('tools'), icon: VscTools,
      content: [
        { name: "Visual Code"  },
        { name: "ESLint" },
        { name: "Prettier" },
        { name: "Git" },
        { name: "Github" },
        { name: "Webpack"  },
        { name: "Vite"  }
      ]
    },
    {
      name: skillsT('libs'), icon: LibrarySquare,
      content: [
        { name: "React Hook Form" },
        { name: "zod" },
      ]
    },
    {
      name: skillsT('datebases'), icon: DatabaseBackup,
      content: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
      ]
    }
  ]

  return (
    <Wrapper>
      <Title titleBody={titleT('skills.title')} subtitleBody={titleT('skills.subtitle')} />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-rows-2 gap-4 w-full">
        {skillsData.map((item) => (
          <TiltCard key={item.name} className="border border-[#52d094] bg-[#101419] cursor-pointer rounded-[2px] text-white overflow-y-auto customCls">
            <div className="flex flex-row items-center gap-x-1 justify-center">
              <h2 className="text-[1.8rem] lg:text-[2.4rem]">{item.name}</h2>
              <item.icon color="#00cdb0" size={42} />
            </div>
            {item.content.map((item) => (
              <div key={item.name} className="flex flex-row items-center justify-between">
                <p className="text-neutral-400 text-[1.2rem] md:text-[1.4rem] xl:text-[1.7rem]">
                  {item.name}
                </p>
              </div>
            ))}
          </TiltCard>
        ))}
      </div>
    </Wrapper>
  )
}

export default Skills;