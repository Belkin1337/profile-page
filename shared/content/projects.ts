export const projectsData = (
	projectsT: Function
) => {
	return [{
		name: projectsT("spotify.title"),
		description: projectsT("integrations.description"),
		image:
			"https://cdn.discordapp.com/attachments/904344676587417621/1196486098629709834/Screenshot_38.png?ex=65b7cd83&is=65a55883&hm=760eab92920f693f45a509f249a8ac86f37c4c2cc652ecde49a1de5740016383&",
		tags: [
			"#react ",
			"#nextjs/app ",
			"#tailwindcss ",
			"#supabase ",
			"#postgresql ",
			"#mongodb ",
		],
	}, {
		name: projectsT("fasberryWeb.title"),
		description: projectsT("fasberryWeb.description"),
		image:
			"https://cdn.discordapp.com/attachments/904344676587417621/1196486099095265410/Screenshot_39.png?ex=65b7cd83&is=65a55883&hm=95dd0b16b2ccdc23a4204179440fce2ec91c92b13fdb5b772b2e691b8bba69ab&",
		tags: [
			"#nextjs/pages ",
			"#tailwindcss ",
			"#shadcnUI "
		],
	}, {
		name: projectsT("profilepage.title"),
		description: projectsT("profilepage.description"),
		image:
			"https://cdn.discordapp.com/attachments/904344676587417621/1196502119671414815/Screenshot_40.png?ex=65b7dc6f&is=65a5676f&hm=8f349386cec9c781d7c80e3603e8b26dd2187d06efec4a3de7aaff99f960833f&",
		tags: [
			"#nextjs/pages ",
			"#tailwindcss ",
			"#postgresql ",
			"#shadcnUI ",
			"nodejs ",
		],
	},
	];
};