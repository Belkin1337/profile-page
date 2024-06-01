import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/lib/i18n/i18n";
import { DropdownMenuItem } from "@/ui/components/dropdown-menu";
import { Typography } from "@/ui/components/typography";
import { Languages } from 'lucide-react';
import { languagesList } from "@/shared/languages/languages";
import { SlotWithTooltip } from "@/components/slot-with-tooltip/slot-with-tooltip";

export interface LanguageItem {
	fullName: string;
	shortName: string;
	label: string;
}

type LanguageShortNames = typeof languagesList extends (infer Items)[] ? Items extends {
	shortName: infer ShortName
} ? ShortName : never : never;

export const LanguageSwitcher = () => {
	const changeLocale = useChangeLocale();
	const locale = useCurrentLocale();

	const languageT = useScopedI18n('settings.features.language');

	return (
		<SlotWithTooltip
			asChild
			tooltip={{
				content: languageT('title'),
				trigger: <Languages size={24} color="white"/>
			}}
			content={(
				languagesList(languageT).map(item => (
					<DropdownMenuItem
						key={item.fullName}
						className={`${locale === item.shortName && 'bg-neutral-700 dark:bg-neutral-700'}}`}
						onClick={() => changeLocale(item.shortName as LanguageShortNames)}
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