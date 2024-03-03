import { Card } from "@/ui/card"
import { Title } from "@/ui/title"
import { FeedbackForm } from "../forms/feedback-form"
import { Meteors } from "@/ui/meteors"
import { useScopedI18n } from "@/lib/next-international"
import { usefulLinks } from "@/content/lists/us-links"
import { contactsList } from "@/content/about/contacts"
import { Typography } from "@/ui/typography"
import Link from "next/link"

export const FeedbackSection = () => {
  const titleT = useScopedI18n('title')
  const servicalT = useScopedI18n('servical')

  // TODO: finish work with the feedback form

  return (
    <>
      <Title id="feedback" titleBody={titleT('contacts.title')} subtitleBody={titleT('contacts.subtitle')} />
      <div className="flex flex-col lg:flex-row justify-between gap-x-12 gap-y-6 w-full">
        <Card rounded="xl" variant="deluge" padding="lg" className="relative flex flex-col w-full lg:w-4/6 py-6 px-4 justify-start gap-y-6">
          <h1 className="text-neutral-200 text-[1rem] md:text-[1.6rem]">
            {titleT('contacts.formTitle')}
          </h1>
          <FeedbackForm />
          <Meteors number={20} />
        </Card>
        <div className="flex flex-col gap-6 w-full justify-between overflow-hidden">
          <div className="flex flex-col gap-y-2">
            <Typography className="text-neutral-200 text-3xl">
              {servicalT('usefulLinks')}:
            </Typography>
            {usefulLinks.map((item, itemIndex) => (
              <Link href={item} key={itemIndex} className="text-neutral-300 text-sm md:text-xl lg:text-2xl hover:underline hover:underline-offset-4 whitespace-pre-wrap">
                &gt;&nbsp;{item}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap flex-row gap-2 lg:gap-4 self-end">
            {contactsList.map((item, idx) => (
              <Link
                key={idx}
                id={`contact-${idx}`}
                href={item.link}
                className="flex p-3 shadow-badge outerspace-badge transition hover:rotate-3 rounded-full cursor-pointer items-center"
              >
                <item.icon className="lg:h-[40px] lg:w-[40px] h-[20px] w-[20px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}