import { useScopedI18n } from "@/lib/i18n/i18n";
import { Title } from "@/ui/components/title"
import { Typography } from "@/ui/components/typography";
import { skillsData } from "@/shared/content/skills";
import dynamic from "next/dynamic";

const MagicCard = dynamic(() => import("@/ui/components/magic-card")
  .then(m => m.MagicCard))
const MagicContainer = dynamic(() => import("@/ui/components/magic-card")
  .then((m) => m.MagicContainer));

export const SkillsSection = () => {
  const titleT = useScopedI18n('title')
  const skillsT = useScopedI18n('skills');
  const skillsArr = skillsData(skillsT)

  return (
    <div className="flex w-full flex-col gap-y-6 min-h-screen">
      <Title
        titleBody={titleT('skills.title')}
        subtitleBody={titleT('skills.subtitle')}
      />
      <MagicContainer className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-rows-1 gap-4 w-full">
        {skillsArr.map((item) => (
          <MagicCard
            key={item.name}
            className="flex flex-col gap-y-6 cursor-pointer rounded-xl overflow-y-auto"
          >
            <div className="flex flex-row items-center gap-x-2 justify-center">
              <h2 className="text-black dark:text-white text-[1.8rem] lg:text-[2.4rem]">
                {item.name}
              </h2>
              <item.icon color="#00cdb0" size={26} />
            </div>
            <div className="flex flex-col gap-y-1">
              {item.content.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row items-center justify-between"
                >
                  <Typography className="text-black dark:text-neutral-400 text-[1.2rem] md:text-[1.4rem] xl:text-[1.7rem]">
                    {item.name}
                  </Typography>
                </div>
              ))}
            </div>
          </MagicCard>
        ))}
      </MagicContainer>
    </div>
  )
}