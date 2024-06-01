import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const weatherKey = "weather";

export type WeatherQueryType = "rain" | "snow" | "no-weather";

export const useWeatherQuery = () => {
	const initial = localStorage.getItem(weatherKey) as WeatherQueryType || "no-weather";

	return useQuery<WeatherQueryType>({
		queryKey: [weatherKey],
		retry: 1,
		refetchOnWindowFocus: false,
		initialData: initial
	})
}

export const useSwitchWeather = () => {
	const { data: weather } = useWeatherQuery();
	const queryClient = useQueryClient();

	const changeWeatherMutation = useMutation({
		mutationFn: async (
			value: WeatherQueryType
		) => {
			queryClient.setQueryData([weatherKey], () => {
				return value
			})

			localStorage.setItem(weatherKey, value)
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: [weatherKey]
			})
		},
		onError: () => {
			throw Error;
		}
	});

	return { weather, changeWeatherMutation }
}