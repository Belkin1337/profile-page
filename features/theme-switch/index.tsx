import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/ui/dropdown-menu';
import { useScopedI18n } from "@/lib/next-international";
import { useTheme } from "next-themes";
import { Typography } from '@/ui/typography';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Brush } from 'lucide-react';

export const Theme = () => {
  const { theme, setTheme } = useTheme()
  const servicalT = useScopedI18n('servical')

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
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <div className="p-4 rounded-xl hover:bg-black/20 hover:duration-300 duration-300">
              <Brush size={24} color="white" />
            </div>
          </TooltipTrigger>
          <TooltipContent className="border-0 p-1 m-0 w-max bg-black/90">
            <Typography variant="secondary">
              {servicalT('change theme')}
            </Typography>
          </TooltipContent>
        </Tooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col py-0 w-[240px] px-0 dark:bg-neutral-800 bg-neutral-600 border-0 overflow-y-auto">
        <Typography className="text-light-text text-md md:text-lg py-1 px-4">
          {servicalT('theme')}: <span className="text-pink-300">{themeTranslate()}</span>
        </Typography>
        <DropdownMenuSeparator />
        {themeList.map((item, idx) => (
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