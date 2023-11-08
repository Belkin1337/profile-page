import Link from "next/link"
import Image from "next/image"
import { useScopedI18n } from "@/lib/next-international"
import Tilt from "react-parallax-tilt"

import { Badge } from "./ui/badge"
import Title from "./ui/title"
import Wrapper from "./ui/wrapper"

import { BsDiscord, BsTelegram } from "react-icons/bs"
import fasberryLogo from "@/public/images/fasberry_logo.png"
import fasberrypreview from "@/public/images/fasberrypreview.png"
import spotifyclone from "@/public/images/almost-spotify.png"
import Card from "./custom-ui/card"

const Projects = () => {
  const servicalT = useScopedI18n("servical");
  const titleT = useScopedI18n('title');
  const projectsT = useScopedI18n('projects');

  const projectsData = [
    {
      id: "frontend", name: projectsT('spotify.title'), description: projectsT('spotify.description'), 
      image: spotifyclone,
      tags: ["#react", "#nextjs", "#tailwindcss", "#supabase", "#postgresql"], 
      demos: "https://spotify-maybe.vercel.app",  sourceCode: "https://github.com/Belkin1337/almost-spotify-clone"
    },
    {
      id: "frontend", name: projectsT('fasberryWeb.title'), description: projectsT('fasberryWeb.description'),
      image: fasberrypreview,
      tags: ["#react", "#nextjs", "#tailwindcss", "#mongodb", "#nodejs", "#expressjs"],
      demos: "https://fasberry.ru", sourceCode: "/"
    },
    { id: "minecraft",  name: projectsT('fasberryServer.title'), description: projectsT('fasberryServer.description'),
      image: fasberryLogo, tags: ["#minecraft", "#java", "#js"],
      contacts: [
        { name: "Discord", icon: BsDiscord, href: "https://discord.gg/vnqfVX4frH" },
        { name: "Telegram", icon: BsTelegram, href: "https://t.me/fasberry" },
      ]
    },
  ]

  return (
    <Wrapper>
      <Title titleBody={titleT('projects.title')} subtitleBody={titleT('projects.subtitle')} />
      <div className="flex flex-col gap-y-16">
        {projectsData.map((item, itemIndex) => (
          <Card id={item.id} key={itemIndex}>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-x-6 gap-y-6">
              <div className="flex flex-col text-white w-full xl:w-4/5">
                <div className="flex flex-col w-full gap-y-4 lg:gap-y-8">
                  <p className="text-[1.6rem] md:text-[3rem] text-sea font-bold">
                    {item.name}
                  </p>
                  <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex}>{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-[1rem] md:text-[2rem]">{item.description}</p>
                  <div className="flex flex-row flex-wrap gap-2">
                    {item.demos || item.sourceCode ? (
                      <>
                        <Link target="_blank" href={item.demos}
                          className={`${item.demos.length !== 0 ? 'text-black text-[1.4rem] px-4 lg:px-12 py-1 wisteria-badge' : 'hidden'}`}>
                            {servicalT('demo')}
                          </Link>
                        <Link target="_blank" href={item.sourceCode}
                          className={`${item.sourceCode.length !== 0 ? "text-black text-[1.4rem] px-4 lg:px-12 py-1 wisteria-badge" : 'hidden'}`}>
                            {servicalT('sources')}
                        </Link>
                      </>
                    ) : null}
                    {item.contacts ? (
                      <>
                        {item.contacts.map((itemElement, itemIndex) => (
                          <Link key={itemIndex} target="_blank" href={itemElement.href}>
                            <itemElement.icon size={64} className="fill-white bg-black hover:bg-white bg-opacity-60 p-3 rounded-full hover:fill-black" />
                          </Link>
                        ))}
                      </>
                    ) : null
                    }
                  </div>
                </div>
              </div>
              <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} className="w-full xl:w-4/5 rounded-sm overflow-hidden cursor-pointer">
                <Image src={item.image} alt={item.name} />
              </Tilt>
              <hr className="bg-white py-2" />
            </div>
          </Card>
        ))}
      </div>
    </Wrapper>
  )
}

export default Projects;