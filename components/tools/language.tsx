import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/lib/next-international";
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Languages } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

export const Language = () => {
  const changeLocale = useChangeLocale();
  const localesT = useScopedI18n('locales');
  const servicalT = useScopedI18n('servical')
  const locale = useCurrentLocale();

  const localeTranslate = () => {
    if (locale === "ru") { return "Русский" }
    if (locale === "en") { return "English" }
  }

  const langList = [
    { 
      value: "english", 
      label: localesT('english'), 
      onClick: () => changeLocale('en') 
    },
    { 
      value: "russian", 
      label: localesT('russian'), 
      onClick: () => changeLocale('ru') 
    }
  ]

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <HoverCard openDelay={1} closeDelay={1}>
          <HoverCardTrigger>
            <div className="hover:bg-black/20 hover:duration-300 duration-300 p-4 rounded-xl">
              <Languages size={24} color="white" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="border-0 p-1 m-0 w-max bg-black/90">
            <p className="text-md text-neutral-400">Сменить язык</p>
          </HoverCardContent>
        </HoverCard>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col py-0 w-[280px] px-0 bg-black border-0">
        <p className="text-light-text text-xl py-2 px-4">
          {servicalT('language')}: <span className="text-pink-300">{localeTranslate()}</span>
        </p>
        <DropdownMenuSeparator />
        {langList.map((item, idx) => (
          <div onClick={item.onClick} key={idx} className="flex hover:bg-neutral-900 rounded-md px-4 py-2 cursor-pointer hover:duration-200 duration-200">
            <p className="text-light-text text-xl">
              {item.label}
            </p>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}