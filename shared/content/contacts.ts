import {
	BsGithub,
	BsPinterest,
	BsSpotify,
	BsTelegram,
	BsTwitter
} from "react-icons/bs";
import { Instagram } from "lucide-react";

export const contactsList = [{
	name: "Telegram",
	icon: BsTelegram,
	link: "https://t.me/distribution_of_vestima"
}, {
	name: "Github",
	icon: BsGithub,
	link: "https://github.com/Belkin1337",
}, {
	name: "Spotify",
	icon: BsSpotify,
	link: "https://open.spotify.com/user/31veybhgwnxxou5l2shlctvaeknm",
}, {
	name: "Pinterest",
	icon: BsPinterest,
	link: "https://ru.pinterest.com/RusBelkin_",
}, {
	name: "Instagram",
	icon: Instagram,
	link: "https://instagram.com/olafvishnevskiy",
}, {
	name: "Twitter",
	icon: BsTwitter,
	link: "https://twitter.com/pureawake",
},
]

export const inputs = (
  t: Function
) => {
	return [{
		name: "name",
		placeholder: t('form.input.placeholder.name')
	}, {
		name: "topic",
		placeholder: t('form.input.placeholder.topic')
	}, {
		name: "contact",
		placeholder: t('form.input.placeholder.contact')
	}]
}