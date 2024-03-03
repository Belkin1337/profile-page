import { skillsData } from "@/content/about/skills"
import { useScopedI18n } from "@/lib/next-international";
import { TiltCard } from "@/ui/tilt-card"
import { Title } from "@/ui/title"
import { Typography } from "@/ui/typography";

export const SkillsSection = () => {
  const titleT = useScopedI18n('title')
  const skillsT = useScopedI18n('skills');
  const skillsArr = skillsData(skillsT)

  return (
    <div className="flex w-full flex-col gap-y-6 min-h-screen">
      <Title titleBody={titleT('skills.title')} subtitleBody={titleT('skills.subtitle')} />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-rows-1 gap-4 w-full">
        {skillsArr.map((item) => (
          <TiltCard key={item.name} className="cursor-pointer rounded-xl text-white overflow-y-auto">
            <div className="flex flex-row items-center gap-x-1 justify-center">
              <h2 className="text-[1.8rem] lg:text-[2.4rem]">
                {item.name}
              </h2>
              <item.icon color="#00cdb0" size={42} />
            </div>
            {item.content.map((item) => (
              <div key={item.name} className="flex flex-row items-center justify-between">
                <Typography className="text-neutral-400 text-[1.2rem] md:text-[1.4rem] xl:text-[1.7rem]">
                  {item.name}
                </Typography>
              </div>
            ))}
          </TiltCard>
        ))}
      </div>
    </div>
  )
}