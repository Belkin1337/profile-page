import { useScopedI18n } from "@/lib/i18n/i18n";
import { Sheet, SheetTrigger } from "@/ui/components/sheet";
import { LuSend } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { FeaturesSlot } from "@/components/layout/header/components/features-slot";
import { GITHUB_PROFILE_LINK } from "@/shared/constants/media-links";
import { Braces, Github } from "lucide-react";
import { ReactNode } from "react";
import { useWatchSheet } from "@/lib/hooks/use-watch-sheet";
import Image from "next/image"
import Link from "next/link";
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() =>
	import('@/components/sidebar/sidebar').then((mod) => mod.Sidebar)
)

type HeaderLinkType = {
	propHref: string,
	children: ReactNode
}

const HeaderLink = ({
	propHref,
	children,
	...props
}: HeaderLinkType) => {
	return (
		<Link
			href={propHref}
			{...props}
		>
			<div className="hover:bg-neutral-400 dark:hover:bg-neutral-800 rounded-xl p-2 hover:duration-200 duration-200">
				{children}
			</div>
		</Link>
	)
}

export const Header = () => {
	const servicalT = useScopedI18n('servical')

	const { isOpen, openSheet } = useWatchSheet({
		name: "widget"
	})

	return (
		<Sheet open={isOpen} onOpenChange={openSheet}>
			<div className="fixed top-0 right-0 left-0 w-full bg-neutral-300/80 dark:bg-neutral-950/80 backdrop-filter backdrop-blur-md z-20">
				<div className="flex items-center w-[90%] mx-auto py-2 justify-between">
					<Link href="/" className="flex gap-x-2 lg:gap-x-4 items-center">
						<div className="overflow-hidden rounded-xl border-2 border-transparent cursor-pointer
              hover:border-b-MAIN_PINK hover:border-r-MAIN_PINK hover:duration-300 duration-300">
							<Image src="/favicon.png" width={42} height={42} alt="pureawake avatar"/>
						</div>
					</Link>
					<div className="flex gap-x-6 items-center">
						<FeaturesSlot
							content="Обратная связь/заказы"
							trigger={(
								<HeaderLink propHref="https://pureawake-studio.su">
									<LuSend size={20} className="dark:text-white text-neutral-950"/>
								</HeaderLink>
							)}
						/>
						<FeaturesSlot
							content="Задонатить"
							trigger={(
								<HeaderLink propHref="/support">
									<MdAttachMoney size={20} className="dark:text-white text-neutral-950"/>
								</HeaderLink>
							)}
						/>
						<FeaturesSlot
							content="Исходники"
							trigger={(
								<HeaderLink propHref={GITHUB_PROFILE_LINK}>
									<Github size={20} className="dark:text-white text-neutral-950" />
								</HeaderLink>
							)}
						/>
						<SheetTrigger>
							<FeaturesSlot
								asChild
								content={servicalT('widget')}
								trigger={(
									<div className="hover:bg-neutral-400 dark:hover:bg-neutral-800 rounded-xl p-2 hover:duration-200 duration-200">
										<Braces size={20} className="dark:text-white text-neutral-950"/>
									</div>
								)}
							/>
						</SheetTrigger>
					</div>
				</div>
			</div>
			<Sidebar/>
		</Sheet>
	)
}