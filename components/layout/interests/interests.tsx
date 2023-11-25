import TooltipLink from "@/components/ui/tooltip-link"
import Title from "@/components/ui/title"
import { Wrapper } from "@/components/ui/wrapper"

import tgImage1 from "@/public/images/interests/tg1.jpg"
import tgImage2 from "@/public/images/interests/ficon.png"
import ytimage1 from "@/public/images/interests/channels4_profile.jpg"
import ytimage2 from "@/public/images/interests/channels4_profileA.jpg"
import { useScopedI18n } from "@/lib/next-international"
import Card from "@/components/ui/card"

const Interests = () => {
  const titleT = useScopedI18n('title')
  const interestsT = useScopedI18n('interests')

  const channelData = [
    {
      parent: "Telegram",
      name: "hope pic",
      image: tgImage1.src,
      subs: 9,
      theme: "пикчи",
      href: "https://t.me/krchphy"
    },
    {
      parent: "Telegram",
      name: "Fasberry",
      image: tgImage2.src,
      subs: 6,
      theme: "майнкрафт",
      href: "https://t.me/fasberry"
    },
    {
      parent: "Youtube",
      name: "RussaHub",
      image: ytimage1.src,
      subs: 4907,
      theme: "нарезки",
      href: "https://www.youtube.com/@RussaHub"
    },
    {
      parent: "Youtube",
      name: "BLKKN",
      image: ytimage2.src,
      subs: 343,
      theme: "музыка",
      href: "https://www.youtube.com/@BLKKN"
    },
  ]

  return (
    <Wrapper>
      <Title titleBody={titleT('interests.title')} subtitleBody={titleT('interests.subtitle')} />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 auto-rows-auto w-full gap-4">
        {channelData.map((item) => (
          <TooltipLink key={item.name} href={item.href}>
            <Card
              key={item.name}
              className="gap-y-6 gap-x-4 justify-start items-start flex-col sm:flex-row lg:flex-col"
            >
              <div className="overflow-hidden">
                <img src={item.image} alt={item.name}
                  className="
                    w-[320px] h-[300px] 
                    md:w-[380px] md:h-[380px] 
                    lg:w-[420px] lg:h-[420px] 
                    xl:w-[460px] xl:h-[460px]
                  "
                />
              </div>
              <div className="flex flex-col text-neutral-700 dark:text-neutral-200">
                <p className="text-xl text-neutral-200">
                  {interestsT('network')}: {item.parent}
                </p>
                <p className="text-xl text-neutral-200">
                  {interestsT('channelName')}: {item.name}
                </p>
                <p className="text-xl text-neutral-200">
                  {interestsT('subscriptions')}: {item.subs}
                </p>
                <p className="text-xl text-neutral-200">
                  {interestsT('topic')}: {item.theme}
                </p>
              </div>
            </Card>
          </TooltipLink>
        ))}
      </div>
    </Wrapper>
  );
}

export default Interests;