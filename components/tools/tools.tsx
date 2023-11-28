import { 
  useChangeLocale, 
  useCurrentLocale, 
  useScopedI18n 
} from "@/lib/next-international";

import { useTheme } from "next-themes";

import Changer from "@/components/ui/changer";

const Tools = () => {
  const { theme, setTheme } = useTheme()
  const servicalT = useScopedI18n('servical')
  const locale = useCurrentLocale();

  const changeLocale = useChangeLocale();
  const localesT = useScopedI18n('locales');

  const localeTranslate = () => {
    if (locale === "ru") { return "Русский" }
    if (locale === "en") { return "English" }
  }

  const themeTranslate = () => {
    if (theme === "dark") { return servicalT('dark') }
    if (theme === "light") { return servicalT('light') }
  }
  
  const langList = [
    { value: "english", label: localesT('english'), onClick: () => changeLocale('en') },
    { value: "russian", label: localesT('russian'), onClick: () => changeLocale('ru') }
  ]

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
    {
      name: "Lang",
      list: langList,
      translate: localeTranslate
    }
  ]

  return (
    <>
      {toolsList.map((item, idx) => (
        <Changer
          translateItem={item.translate}
          list={item.list}
          key={idx}
        />
      ))}
    </>
  );
}

export default Tools;