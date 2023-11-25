import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage, } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"

import { Instagram } from 'lucide-react';
import { BsSpotify, BsTelegram, BsGithub, BsPinterest, BsTwitter } from "react-icons/bs"

import Title from "@/components/ui/title";
import { Wrapper } from "@/components/ui/wrapper";
import { useScopedI18n } from "@/lib/next-international";
import Card from "@/components/ui/card";
import { usefulLinks } from "@/share/lists/us-links";

const contactsList = [
  { name: "Telegram", icon: BsTelegram, link: "https://t.me/jolycock", },
  { name: "Github", icon: BsGithub, link: "https://github.com/Belkin1337", },
  { name: "Spotify", icon: BsSpotify, link: "https://open.spotify.com/user/31veybhgwnxxou5l2shlctvaeknm", },
  { name: "Pinterest", icon: BsPinterest, link: "https://ru.pinterest.com/RusBelkin_", },
  { name: "Instagram", icon: Instagram, link: "https://instagram.com/olafvishnevskiy", },
  { name: "Twitter", icon: BsTwitter, link: "https://twitter.com/jolycock", },
]

const Contacts = () => {
  const titleT = useScopedI18n('title')
  const servicalT = useScopedI18n('servical')

  const FormSchema = z.object({
    name: z.string()
      .min(4, { message: "Имя должно состоять хотя бы из 4 символов." })
      .max(32, { message: "Максимальная длина имени - не более 32 символов." }),
    topic: z.string().min(1, { message: "Тема сообщения не может быть пустой." }).max(32),
    message: z.string()
      .min(12, { message: "Сообщение должно состоять хотя бы из 12 символов." })
      .max(160, { message: "Максимальная длина сообщения - не более 160 символов." }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const inputList = [
    { name: "name", placeholder: servicalT('form.input.placeholder.name') },
    { name: "topic", placeholder: servicalT('form.input.placeholder.topic') },
    { name: "contact", placeholder: servicalT('form.input.placeholder.contact') },
  ]

  return (
    <Wrapper>
      <Title titleBody={titleT('contacts.title')} subtitleBody={titleT('contacts.subtitle')} />
      <div className="flex flex-col lg:flex-row justify-between gap-x-12 gap-y-6 w-full">
        <Card variant="pink" padding="lg" className="flex flex-col w-full lg:w-4/6 py-6 px-4 justify-start gap-y-6">
          <h1 className="text-neutral-200 text-[1rem] md:text-[1.6rem]">
            {titleT('contacts.formTitle')}
          </h1>
          <Form {...form}>
            <form className="space-y-6">
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-y-4">
                      <Select name="targetMedia">
                        <SelectTrigger className="text-[1.4rem] text-neutral-400">
                          <SelectValue className="text-[1.4rem] text-sea" placeholder={servicalT('form.select.title')} />
                        </SelectTrigger>
                        <SelectContent className="bg-basicBackground">
                          <SelectItem value="telegram" className="cursor-pointer focus:text-sea text-[1rem] text-neutral-200">
                            Telegram
                          </SelectItem>
                          <SelectItem value="vk" className="cursor-pointer focus:text-sea text-[1rem] text-neutral-200">
                            VK
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {inputList.map((item) => (
                        <Input
                          key={item.name}
                          spellCheck="false"
                          name={item.name}
                          className="text-[1.4rem] text-sea"
                          placeholder={item.placeholder}
                        />
                      ))}
                      <Textarea
                        placeholder={servicalT('form.textarea.placeholder.message')}
                        spellCheck="false"
                        className="placeholder:text-neutral-400 text-[1.4rem] text-sea resize-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    <span className="text-neutral-400 text-md">{servicalT('form.textarea.label')}</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />
              <Button
                // onClick={() => toast({
                //   className: "text-white font-normal text-xl",
                //   title: "Пока нельзя написать мне.", duration: 1400
                // })}
                size="xl" className="border border-transparent hover:border-sea p-2 hover:bg-outline-none w-full focus:outline-none text-[1.4rem] text-[#F7AEF8]">
                {servicalT('form.button.title')}
              </Button>
            </form>
          </Form>
        </Card>
        <div className="flex flex-col gap-6 w-full justify-between overflow-hidden">
          <div className="flex flex-col gap-y-2">
            <p className="text-neutral-200 text-3xl">
              {servicalT('usefulLinks')}:
            </p>
            {usefulLinks.map((item, itemIndex) => (
              <Link
                href={item}
                key={itemIndex}
                className="text-neutral-300 text-sm md:text-xl lg:text-2xl hover:underline hover:underline-offset-4 whitespace-pre-wrap"
              >
                &gt;&nbsp;{item}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap flex-row gap-2 lg:gap-4 self-end">
            {contactsList.map((contact, contactIndex) => (
              <Link
                href={contact.link}
                id={`contact-${contactIndex}`}
                key={contactIndex}
                className="flex p-3 shadow-badge outerspace-badge transition hover:rotate-3 rounded-full cursor-pointer items-center"
              >
                <contact.icon className="lg:h-[40px] lg:w-[40px] h-[20px] w-[20px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contacts;