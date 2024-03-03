import { 
  BsGithub, 
  BsPinterest, 
  BsSpotify, 
  BsTelegram, 
  BsTwitter 
} from "react-icons/bs";
import { Instagram } from "lucide-react";

export const contactsList = [
  {
    name: "Telegram",
    icon: BsTelegram,
    link: "https://t.me/jolycock"
  },
  {
    name: "Github",
    icon: BsGithub,
    link: "https://github.com/Belkin1337",
  },
  {
    name: "Spotify",
    icon: BsSpotify,
    link: "https://open.spotify.com/user/31veybhgwnxxou5l2shlctvaeknm",
  },
  {
    name: "Pinterest",
    icon: BsPinterest,
    link: "https://ru.pinterest.com/RusBelkin_",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/olafvishnevskiy",
  },
  {
    name: "Twitter",
    icon: BsTwitter,
    link: "https://twitter.com/jolycock",
  },
]

export const inputs = (servicalT: Function) => {
  return [
    {
      name: "name",
      placeholder: servicalT('form.input.placeholder.name')
    },
    {
      name: "topic",
      placeholder: servicalT('form.input.placeholder.topic')
    },
    {
      name: "contact",
      placeholder: servicalT('form.input.placeholder.contact')
    },
  ]
}