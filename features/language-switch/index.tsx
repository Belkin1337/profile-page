import { 
  useChangeLocale, 
  useCurrentLocale, 
  useScopedI18n 
} from "@/lib/next-international";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { Typography } from "@/ui/typography";
import { Languages } from 'lucide-react';

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
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <div className="hover:bg-black/20 hover:duration-300 duration-300 p-4 rounded-xl">
              <Languages size={24} color="white" />
            </div>
          </TooltipTrigger>
          <TooltipContent className="border-0 p-1 m-0 w-max bg-black/90">
            <Typography variant="secondary">
              {servicalT('change lang')}
            </Typography>
          </TooltipContent>
        </Tooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col py-0 w-[240px] px-0 dark:bg-neutral-800 bg-neutral-600 border-0 overflow-y-auto">
        <Typography className="text-light-text text-md md:text-lg py-2 px-4">
          {servicalT('language')}: <span className="text-pink-300">
            {localeTranslate()}
          </span>
        </Typography>
        <DropdownMenuSeparator />
        {langList.map((item, idx) => (
          <div onClick={item.onClick} key={idx} className="flex hover:bg-neutral-900 px-4 py-1 cursor-pointer hover:duration-200 duration-200">
            <Typography className="text-light-text text-md md:text-lg">
              {item.label}
            </Typography>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}