import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/lib/next-international";
import { Globe } from 'lucide-react';
import { useTheme } from "next-themes";

import Changer from "@/components/ui/changer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Tools = () => {
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

  const toolsList = [
    {
      name: "Theme",
      list: themeList,
      translate: themeTranslate,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Globe size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {toolsList.map((item, idx) => (
          <Changer
            translateItem={item.translate}
            list={item.list}
            key={idx}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Tools;