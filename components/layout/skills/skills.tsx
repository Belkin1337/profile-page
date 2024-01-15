import { useScopedI18n } from "@/lib/next-international"

import { TiltCard } from '@/components/ui/tilt-card'
import Title from "@/components/ui/title"

import { Wrapper } from "@/components/ui/wrapper"
import { LiaLanguageSolid } from "react-icons/lia"
import { AiFillSetting } from "react-icons/ai"
import { VscTools } from "react-icons/vsc"

const Skills = () => {
  const titleT = useScopedI18n('title')
  const skillsT = useScopedI18n('skills');

  const skillsData = [
    {
      name: skillsT('languages'), icon: LiaLanguageSolid,
      content: [
        { name: "Typescript" },
        { name: "Javascript" },
        { name: "Rust" },
        { name: "Java"}
      ]
    },
    {
      name: skillsT('frameworks'), icon: AiFillSetting,
      content: [
        { name: "React",  },
        { name: "Solid "},
        { name: "Next JS", },
        { name: "Node JS" },
      ]
    },
    {
      name: skillsT('tools'), icon: VscTools,
      content: [
        { name: "Visual Studio Code"  },
        { name: "ESLint" },
        { name: "Prettier" },
        { name: "Git" },
        { name: "Github" },
        { name: "Webpack"  },
        { name: "Vite"  }
      ]
    },
  ]

  return (
    <Wrapper>
      <Title titleBody={titleT('skills.title')} subtitleBody={titleT('skills.subtitle')} />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-rows-1 gap-4 w-full">
        {skillsData.map((item) => (
          <TiltCard key={item.name} className="cursor-pointer rounded-xl text-white overflow-y-auto">
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