import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/components/tooltip";
import { Typography } from "@/ui/components/typography";
import { ReactNode } from "react";

interface FeaturesSlotProps {
	trigger: ReactNode,
	content: string,
	asChild?: boolean
}

export const FeaturesSlot = ({
	trigger,
	content,
	asChild
}: FeaturesSlotProps) => {
	return (
		<Tooltip delayDuration={0}>
			<TooltipTrigger className="w-full" asChild={asChild}>
				{trigger}
			</TooltipTrigger>
			<TooltipContent>
				<Typography className="text-sm text-black dark:text-white">
					{content}
				</Typography>
			</TooltipContent>
		</Tooltip>
	)
}