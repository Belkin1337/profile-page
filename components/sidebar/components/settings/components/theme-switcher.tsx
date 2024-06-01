import { DropdownMenuItem } from '@/ui/components/dropdown-menu';
import { useScopedI18n } from "@/lib/i18n/i18n";
import { useTheme } from "next-themes";
import { Typography } from '@/ui/components/typography';
import { Brush } from 'lucide-react';
import { themeList } from "@/shared/styles/themes";
import { useCallback } from "react";
import { SlotWithTooltip } from "@/components/slot-with-tooltip/slot-with-tooltip";

const dark: "dark" = "dark";
const light: "light" = "light";

type Themes = typeof dark | typeof light;

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	const themeT = useScopedI18n("settings.features.theme");

	const handleThemeChange = useCallback((option: Themes) => {
		setTheme(option);
	}, [setTheme])

	return (
		<SlotWithTooltip
			asChild
			tooltip={{
				content: themeT('title'),
				trigger: <Brush size={24} color="white"/>
			}}
			content={(
				themeList(themeT).map(item => (
					<DropdownMenuItem
						key={item.value}
						className={`${theme === item.value && 'bg-neutral-700 dark:bg-neutral-700'}`}
						onClick={() => handleThemeChange(item.value as Themes)}
					>
						<Typography className="text-light-text text-md md:text-lg">
							{item.label}
						</Typography>
					</DropdownMenuItem>
				))
			)}
		/>
	)
}