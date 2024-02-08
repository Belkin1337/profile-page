import Link from "next/link";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/ui/input"
import { Button } from "@/ui/button";
import { Textarea } from "@/ui/textarea"
import { Title } from "@/ui/title";
import { Wrapper } from "@/ui/wrapper";
import { useScopedI18n } from "@/lib/next-international";
import { usefulLinks } from "@/content/lists/us-links";
import { Card } from "@/ui/card";
import { contactsList } from "@/content/about/contacts";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormMessage,
} from "@/ui/form"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/ui/select"

const FormSchema = z.object({
  name: z.string()
    .min(4, { message: "Имя должно состоять хотя бы из 4 символов." })
    .max(32, { message: "Максимальная длина имени - не более 32 символов." }),
  topic: z.string().min(1, {
    message: "Тема сообщения не может быть пустой."
  }).max(32),
  message: z.string()
    .min(12, { message: "Сообщение должно состоять хотя бы из 12 символов." })
    .max(160, { message: "Максимальная длина сообщения - не более 160 символов." }),
});

const inputs = (servicalT: Function) => {
  return [
    {
      name: "name",
      placeholder: servicalT('form.input.placeholder.name')
    },
    {
      name: "topic",
      placeholder: servicalT('form.input.placeholder.topic')
    },
    {
      name: "contact",
      placeholder: servicalT('form.input.placeholder.contact')
    },
  ]
}

export const Contacts = () => {
  const titleT = useScopedI18n('title')
  const servicalT = useScopedI18n('servical')

  const inputsArr = inputs(servicalT)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

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
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
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
                        {inputsArr.map((item) => (
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
                      <span className="text-neutral-400 text-md">
                        {servicalT('form.textarea.label')}
                      </span>
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
    </Wrapper>
  )
}