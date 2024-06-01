import { Typography } from "@/ui/components/typography";
import { useScopedI18n } from "@/lib/i18n/i18n";
import { LanguageSwitcher } from "@/components/sidebar/components/settings/components/language-switcher";
import { ThemeSwitcher } from "@/components/sidebar/components/settings/components/theme-switcher";
import { Experimental } from "@/components/sidebar/components/settings/components/experimental";

export const SidebarSettings = () => {
	const servicalT = useScopedI18n('servical')

	return (
		<div className="relative top-4 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
			<Typography className="text-md lg:text-lg text-white cursor-default">
				{servicalT('settings')}:
			</Typography>
			<div className="flex items-center gap-x-4">
				<LanguageSwitcher/>
				<ThemeSwitcher/>
				<Experimental/>
			</div>
		</div>
	)
}