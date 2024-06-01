import { ReactNode } from "react";
import { useSwitchWeather } from "@/lib/hooks/use-switch-weather";

interface WeatherProps {
	children: ReactNode
}

export const WeatherProvider = ({
	children,
}: WeatherProps) => {
	const { weather } = useSwitchWeather()

	return (
		<div className={`weather ${weather}`}>
			{children}
		</div>
	)
}