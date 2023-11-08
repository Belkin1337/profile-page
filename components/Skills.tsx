import { LiaLanguageSolid } from "react-icons/lia"
import { AiFillSetting } from "react-icons/ai"
import { VscTools } from "react-icons/vsc"
import { DatabaseBackup, LibrarySquare } from "lucide-react"

import TiltCard from './custom-ui/tilt-card'
import Wrapper from "./ui/wrapper"
import Title from "./ui/title"
import { useScopedI18n } from "@/lib/next-international"
import { title } from "process"
import { Progress } from "@/components/ui/progress"

const Skills = () => {
  const titleT = useScopedI18n('title')
  const skillsT = useScopedI18n('skills');

  const skillsData = [
    {
      name: skillsT('languages'),
      icon: LiaLanguageSolid,
      content: [
        {
          name: "HTML",
          progress: 90,
        },
        {
          name: "CSS",
          progress: 90,
        },
        {
          name: "Javascript",
          progress: 60,
        },
        {
          name: "Typescript",
          progress: 50,
        },
        {
          name: "Rust",
          progress: 10,
        },
      ]
    },
    {
      name: skillsT('frameworks'),
      icon: AiFillSetting,
      content: [
        {
          name: "React",
          progress: 50, 
        },
        {
          name: "NextJS",
          progress: 40, 
        },
        {
          name: "ExpressJS",
          progress: 50, 
        },
        {
          name: "TailwindCSS",
          progress: 90,
        }
      ]
    },
    {
      name: skillsT('tools'),
      icon: VscTools,
      content: [
        {
          name: "Git",
          progress: 50, 
        },
        {
          name: "Github",
          progress: 50, 
        },
        {
          name: "Webpack",
          progress: 60,
        },
        {
          name: "Vite",
          progress: 40,
        }
      ]
    },
    {
      name: skillsT('libs'),
      icon: LibrarySquare,
      content: [
        {
          name: "React Hook Form",
          progress: 30, 
        },
        {
          name: "MUI",
          progress: 30, 
        },
        {
          name: "VsCode",
          progress: 90, 
        },
      ]
    },
    {
      name: skillsT('datebases'),
      icon: DatabaseBackup,
      content: [
        {
          name: "MySQL",
          progress: 40, 
        },
        {
          name: "PostgreSQL",
          progress: 20, 
        },
        {
          name: "MongoDB",
          progress: 60, 
        },
      ]
    }
  ]

  return (
    <Wrapper>
      <Title titleBody={titleT('skills.title')} subtitleBody={titleT('skills.subtitle')} />
      <div className="flex flex-row flex-wrap gap-4 justify-start items-center w-full">
        {skillsData.map((item) => (
          <TiltCard key={item.name} className="border border-[#52d094] bg-[#101419] cursor-pointer rounded-[20px] text-white">
            <div className="flex flex-row items-center gap-x-1 justify-center">
              <h2 className="text-[2rem] md:text-[3rem]">{item.name}</h2>
              <item.icon color="#00cdb0" size={42} />
            </div>
            {item.content.map((item) => (
              <div key={item.name} className="flex flex-row items-center justify-between">
                <p className="text-neutral-400 text-[1.4rem] md:text-[2rem] w-[60%]">
                  {item.name}
                </p>
                <Progress value={item.progress} className="w-[40%] bg-neutral-100 "/>
              </div>
            ))}
          </TiltCard>
        ))}
      </div>
    </Wrapper>
  )
}

export default Skills;