import { Input } from "@/ui/input"
import { Textarea } from "@/ui/textarea"
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
import { inputs } from "@/content/about/contacts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/schemas/feedback";
import { useScopedI18n } from "@/lib/next-international";
import { z } from "zod";
import { ExButton } from "@/ui/ex-button";

export const FeedbackForm = () => {
  const servicalT = useScopedI18n('servical')
  const inputsArr = inputs(servicalT)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className="space-y-6 z-50">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-y-4">
                  <Select defaultValue="telegram">
                    <SelectTrigger className="text-[1.4rem] text-neutral-400">
                      <SelectValue className="text-[1.4rem] text-sea" placeholder={servicalT('form.select.title')} />
                    </SelectTrigger>
                    <SelectContent className="bg-basicBackground">
                      <SelectItem value="telegram">
                        Telegram
                      </SelectItem>
                      <SelectItem value="mail">
                        Mail
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {inputsArr.map((item) => (
                    <Input
                      key={item.name}
                      spellCheck="false"
                      name={item.name}
                      className="text-[1.2rem] text-sea"
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
        <ExButton>
          {servicalT('form.button.title')}
        </ExButton>
      </form>
    </Form>
  )
}