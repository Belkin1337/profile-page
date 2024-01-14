import { Brush } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/lib/next-international";
import { useTheme } from "next-themes";
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';

export const Theme = () => {
  const { theme, setTheme } = useTheme()
  const servicalT = useScopedI18n('servical')
  const locale = useCurrentLocale();

  const changeLocale = useChangeLocale();
  const localesT = useScopedI18n('locales');

  const themeTranslate = () => {
    if (theme === "dark") { return servicalT('dark') }
    if (theme === "light") { return servicalT('light') }
  }

  const themeList = [
    { value: "dark", label: servicalT('dark'), onClick: () => setTheme("dark") },
    { value: "light", label: servicalT('light'), onClick: () => setTheme("light") },
  ]

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <HoverCard openDelay={1} closeDelay={1}>
          <HoverCardTrigger>
            <div className="p-4 rounded-xl hover:bg-black/20 hover:duration-300 duration-300">
              <Brush size={24} color="white" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="border-0 p-1 m-0 w-max bg-black/90">
            <p className="text-md text-neutral-400">Сменить тему</p>
          </HoverCardContent>
        </HoverCard>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col py-0 w-[280px] px-0 bg-black border-0">
        <p className="text-light-text text-xl py-2 px-4">
          {servicalT('theme')}: <span className="text-pink-300">{themeTranslate()}</span>
        </p>
        <DropdownMenuSeparator />
        {themeList.map((item, idx) => (
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