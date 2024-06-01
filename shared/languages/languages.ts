import { LanguageItem } from "@/components/sidebar/components/settings/components/language-switcher";

export const languagesList = (
	t: Function
): LanguageItem[] => {
	return [{
		fullName: "English",
		shortName: "en",
		label: t('english'),
	}, {
		fullName: "Russian",
		shortName: "ru",
		label: t('russian'),
	},{
		fullName: "Kazakh",
		shortName: "kz",
		label: t('kazakh'),
	},{
		fullName: "Ukrainian",
		shortName: "uk",
		label: t('ukrainian'),
	},{
		fullName: "Hebrew",
		shortName: "he",
		label: t('jewish'),
	},{
		fullName: "Беларуская",
		shortName: "be",
		label: t('belarus'),
	}]
}