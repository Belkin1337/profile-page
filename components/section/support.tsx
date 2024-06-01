import Link from "next/link"
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/ui/components/3d-card";
import { Title } from "@/ui/components/title";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/components/tooltip";
import { Typography } from "@/ui/components/typography";
import { useToast } from "@/lib/hooks/use-toast";
import { supportMethods } from "@/shared/constants/support-methods";
import AnimatedGradientText from "@/ui/components/animated-grad-text";
import { cn } from "@/lib/utils/styles/cn";

export const SupportSection = () => {
	const { toast } = useToast();

	const handleCopyboard = async (value: string) => {
		await navigator.clipboard.writeText(value);

		toast({ title: "Адрес скопирован" })
	}

	return (
		<div className="flex flex-col gap-y-12 min-h-screen pt-24 w-full">
			<div className="flex flex-col gap-y-4 w-full">
				<Title titleBody="Ниже способы, как можно помочь материально"/>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{supportMethods.map((item,
						idx) => (
						<div key={idx} className="flex flex-col p-4 rounded-xl bg-neutral-800 w-full h-full">
							<Image
								src={`/${item.image}`}
								loading="lazy"
								width={800}
								height={800}
								className="rounded-xl object-cover w-full h-[200px]"
								alt={item.type}
							/>
							<div className="pt-4 text-white font-bold cursor-pointer">
								{item.link ? (
									<Link href={item.value} target="_blank">
										Помочь
									</Link>
								) : (
									<p onClick={() => handleCopyboard(item.value)}>
										Кликни, чтобы скопировать
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center flex-col gap-y-4 w-full">
				<Title titleBody="А также, если вы нуждаетесь в хорошем, продающий ваш товар, сайте, обращаетсь в мою студию"/>
				<Link href="https://pureawake-studio.su" target="_blank">
					<AnimatedGradientText>
						<span
							className={cn(
								`inline animate-gradient text-lg md:text-xl xl:text-3xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,)}
						>
							кликни
						</span>
					</AnimatedGradientText>
				</Link>
			</div>
		</div>
	)
}