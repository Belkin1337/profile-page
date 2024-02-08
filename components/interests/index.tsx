import Image from "next/image"
import { useScopedI18n } from "@/lib/next-international"
import { Wrapper } from "@/ui/wrapper"
import { Card } from "@/ui/card"
import { data } from "@/content/channels"
import { Title } from "@/ui/title"

export const Interests = () => {
  const titleT = useScopedI18n('title')
  const interestsT = useScopedI18n('interests')

  return (
    <Wrapper>
      <Title titleBody={titleT('interests.title')} subtitleBody={titleT('interests.subtitle')} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 auto-rows-auto w-full gap-4">
        {data.map((item) => (
          <Card padding="sm" key={item.name} className="gap-y-6 gap-x-4 justify-start items-start xl:items-center flex-col lg:flex-row">
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                className="w-[300px] h-[300px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col text-neutral-700 dark:text-neutral-200">
              <p className="text-[1.4rem] text-MAIN_TEXT">
                {item.parent}
              </p>
              <p className="text-[1.2rem] text-neutral-300">
                {interestsT('channelName')}: {item.name}
              </p>
              <p className="text-[1.2rem] text-neutral-300">
                {interestsT('subscriptions')}: {item.subs}
              </p>
              <p className="text-[1.2rem] text-neutral-300">
                {interestsT('topic')}: {item.theme}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Wrapper>
  );
}