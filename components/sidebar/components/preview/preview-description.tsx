import { Typography } from "@/ui/components/typography";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/components/hover-card";
import { useScopedI18n } from "@/lib/i18n/i18n";
import Link from "next/link";

export const SidebarPreviewDescription = () => {
	const servicalT = useScopedI18n('servical')

	return (
		<>
			<div className="relative -top-8 mx-4 p-4 bg-black/80 rounded-xl flex flex-col">
				<div className="flex flex-col w-full">
					<Typography className="text-white text-xl lg:text-2xl">
						Белкин
					</Typography>
					<HoverCard openDelay={1} closeDelay={1}>
						<HoverCardTrigger className="cursor-default">
							<Typography font="normal" className="text-md lg:text-lg text-white">
								pureawake/he/her
							</Typography>
						</HoverCardTrigger>
						<HoverCardContent className="border-0 relative -top-14 -left-20 p-1 m-0 w-max bg-black/90">
							<Typography className="text-md text-neutral-400">
								{servicalT('pronouns')}
							</Typography>
						</HoverCardContent>
					</HoverCard>
				</div>
			</div>
			<div className="relative -top-4 mx-4 p-4 overflow-hidden rounded-xl bg-black/80">
				<Typography className="text-md lg:text-lg text-white cursor-default">
					{servicalT('about me')}:
				</Typography>
				<div className="flex flex-col w-full">
					<Typography font="normal" className="text-white text-md">
						Абоба. Кстати, вот мой проектик:&nbsp;
						<Link href="https://fasberry.ru/" target="_blank" className="hover:underline">
							https://fasberry.ru
						</Link>
					</Typography>
				</div>
			</div>
		</>
	)
}