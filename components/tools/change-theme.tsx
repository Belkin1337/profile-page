import { useState } from "react";
import { useScopedI18n } from "@/lib/next-international";
import { useTheme } from "next-themes";
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/styles/utils"

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

const ChangeTheme = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const { theme, setTheme } = useTheme()
  const servicalT = useScopedI18n('servical')
  const themeDetect = () => {
    if (theme === "dark") { return servicalT('dark')}
    if (theme === "light") { return servicalT('light') }
  }

  const themeList = [
    { value: "dark", label: servicalT('dark'), onClick: () => setTheme("dark") },
    { value: "light", label: servicalT('light'), onClick: () => setTheme("light") },
  ]

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="text-[1rem] text-MAIN_PINK font-medium flex justify-between items-center p-2
            hover:bg-LIGHT_BACKGROUND dark:hover:bg-MAIN_BACKGROUND hover:transition hover:duration-100 transition duration-100
          ">
            {value ? themeList.find((theme) => theme.value === value)?.label  : themeDetect()}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandGroup>
              {themeList.map((theme) => (
                <div key={theme.value} onClick={theme.onClick}>
                  <CommandItem
                    value={theme.value}
                    onSelect={(currentValue) => { setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {theme.label}
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

export default ChangeTheme;