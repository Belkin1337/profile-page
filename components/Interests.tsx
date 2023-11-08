import TooltipLink from "./custom-ui/tooltip-link"
import Title from "./ui/title"
import Wrapper from "./ui/wrapper"

import tgImage1 from "@/public/images/photo_2023-10-04_21-36-23.jpg"
import tgImage2 from "@/public/images/ficon.png"
import ytimage1 from "@/public/images/channels4_profile.jpg"
import ytimage2 from "@/public/images/channels4_profileA.jpg"
import { useScopedI18n } from "@/lib/next-international"
import Card from "./custom-ui/card"

const interests = () => {
  const titleT = useScopedI18n('title')
  const interestsT = useScopedI18n('interests')
  // TODO: google api and tg api

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
      <div className="flex md:flex-row flex-wrap flex-col w-full gap-6 justify-start">
        {channelData.map((item) => (
          <TooltipLink key={item.name} href={item.href}>
            <Card key={item.name} className="gap-y-6 justify-start items-start flex-col">
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
              <div className="flex flex-col text-neutral-200">
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

export default interests;