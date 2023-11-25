import { useState } from "react";

import { 
  useChangeLocale, 
  useCurrentLocale, 
  useI18n, 
  useScopedI18n 
} from '@/lib/next-international'

import { cn } from "@/lib/styles/utils"
import { Check, ChevronsUpDown } from "lucide-react"

import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ChangeLang = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const localesT = useScopedI18n('locales');

  const localeList = () => {
    if (locale === "ru") { return "Русский" }
    if (locale === "en") { return "English" }
  }

  const langList = [
    { value: "english", label: localesT('english'), onClick: () => changeLocale('en')},
    { value: "russian", label: localesT('russian'), onClick: () => changeLocale('ru')}
  ]

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="text-[1rem] text-MAIN_PINK font-medium flex justify-between items-center p-2
            hover:bg-LIGHT_BACKGROUND dark:hover:bg-MAIN_BACKGROUND hover:transition hover:duration-100 transition duration-100"
          >
            {value ? langList.find((lang) => lang.value === value)?.label : localeList()}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandGroup>
              {langList.map((lang) => (
                <div key={lang.value} onClick={lang.onClick}>
                  <CommandItem
                    value={lang.value}
                    onSelect={(currentValue) => { setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {lang.label}
                  </CommandItem>
                </div>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default ChangeLang;