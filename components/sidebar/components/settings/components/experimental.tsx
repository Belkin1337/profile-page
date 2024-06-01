import { CloudSunRain } from "lucide-react"
import { Typography } from "@/ui/components/typography";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/ui/components/dropdown-menu";
import { SlotWithTooltip } from "@/components/slot-with-tooltip/slot-with-tooltip";
import { useScopedI18n } from "@/lib/i18n/i18n";
import { useSwitchWeather, WeatherQueryType } from "@/lib/hooks/use-switch-weather";
import { weatherList } from "@/shared/styles/weathers";

export const Experimental = () => {
	const { weather, changeWeatherMutation } = useSwitchWeather()

	const weatherT = useScopedI18n("settings.features.weather")

	return (
		<SlotWithTooltip
			asChild
			tooltip={{
				content: "Experimental",
				trigger: <CloudSunRain size={24} color="white"/>
			}}
			content={(
				<div className="flex flex-col gap-y-2">
					<div className="flex flex-col">
						<DropdownMenu>
							<DropdownMenuTrigger asChild className="flex justify-start w-full">
								<DropdownMenuItem className="w-full">
									<Typography className="text-light-text text-md md:text-lg">
										{weatherT("title")}
									</Typography>
								</DropdownMenuItem>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side="left"
								sideOffset={6}
								align="start"
								alignOffset={-4}
								className="flex flex-col p-1 w-[200px] dark:bg-neutral-800 bg-neutral-600 border-0"
							>
								{weatherList(weatherT).map(item => (
									<DropdownMenuItem
										key={item.name}
										className={`${weather === item.value && 'bg-neutral-700 dark:bg-neutral-700'}`}
										onClick={() => changeWeatherMutation.mutate(item.value as WeatherQueryType)}
									>
										<Typography className="text-light-text text-md md:text-lg">
											{item.name}
										</Typography>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			)}
		/>
	)
}