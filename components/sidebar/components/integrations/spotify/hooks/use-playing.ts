import { useQuery } from "@tanstack/react-query";
import { SpotifySong } from "@/types/spotify";
import { useEffect } from "react";

async function getTrack() {
	return await fetch("/api/spotify/now-playing")
		.then((res: Response): Promise<SpotifySong> => res.json());
}

export const usePlaying = () => {
	const { data, refetch, isLoading } = useQuery<SpotifySong, Error>({
		queryKey: ["track"],
		queryFn: getTrack,
		retry: 2,
	});

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined;

		if (data?.is_playing) {
			timer = setInterval(() => {
				data.progress_ms += 1000;

				if (data.progress_ms >= data.item.duration_ms) {
					clearInterval(timer);
				}
			}, 1000);
		}

		if (data) refetch()

		return () => clearInterval(timer);
	}, [data, refetch]);

	console.log(data)

	return { data, refetch, isLoading };
}