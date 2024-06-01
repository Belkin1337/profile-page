import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from "@/ui/components/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/components/tooltip";
import { ReactNode } from "react";
import { Typography } from "@/ui/components/typography";

interface SlotWithTooltipProps {
	tooltip?: {
		trigger: ReactNode,
		content: string
	},
	content: ReactNode,
	asChild?: boolean
}

export const SlotWithTooltip = ({
	tooltip,
	content,
	asChild
}: SlotWithTooltipProps) => {
	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild={asChild}>
						<div className="hover:bg-neutral-800 hover:duration-300 duration-300 p-4 rounded-md">
							{tooltip?.trigger}
						</div>
					</TooltipTrigger>
					<TooltipContent side="bottom">
						<Typography variant="secondary">
							{tooltip?.content}
						</Typography>
					</TooltipContent>
				</Tooltip>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				side="left"
				align="start"
				className="flex flex-col p-1 w-[240px] dark:bg-neutral-800 bg-neutral-600 border-0"
			>
				{content}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}