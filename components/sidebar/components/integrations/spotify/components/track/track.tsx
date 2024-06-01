import { useRouter } from "next/navigation"
import { BsEmojiFrown } from "react-icons/bs";
import { useScopedI18n } from '@/lib/i18n/i18n';
import { TitleSong } from "@/components/sidebar/components/integrations/spotify/components/track/components/track-title";
import { TrackArtist } from "@/components/sidebar/components/integrations/spotify/components/track/components/track-artist";
import { TrackDuration } from "@/components/sidebar/components/integrations/spotify/components/track/components/track-duration";
import { USER_LINK } from "@/shared/constants/media-links";
import { usePlaying } from "@/components/sidebar/components/integrations/spotify/hooks/use-playing";
import { SpotifySkeleton } from "@/components/skeletons/spotify-skeleton";
import Image from "next/image"

export const Track = () => {
	const { data, isLoading } = usePlaying()
	const { push } = useRouter();

	const isPlaying = data ? data.is_playing : false;

	const servicalT = useScopedI18n('servical');

	const trackHandler = () => {
		if (data?.is_playing) {
			push(data.item.external_urls.spotify)
		} else {
			push(USER_LINK)
		}
	}

	if (isLoading) return <SpotifySkeleton/>

	if (!data?.is_playing) {
		return (
			<div className="flex items-center gap-x-4 pt-4">
				<div
					onClick={() => trackHandler()}
					className="flex cursor-pointer items-center rounded-md justify-center w-[82px] h-[82px] bg-neutral-950"
				>
					<BsEmojiFrown size={42} className="text-neutral-600"/>
				</div>
				<p className='font-medium text-md md:text-lg text-neutral-100 truncate'>
					{servicalT('Offline')}
				</p>
			</div>
		)
	}

	return (
		<div className="flex items-center justify-start">
			<div onClick={() => trackHandler()} className="flex items-center gap-2 cursor-pointer max-h-[128px] pt-4 w-full">
				<div className="overflow-hidden w-[86px] rounded-xl">
					{isPlaying && (
						<Image
							width={94}
							height={94}
							src={data.item.album.images[0].url}
							alt={data.item.album.name}
							loading="lazy"
						/>
					)}
				</div>
				<div className="flex flex-col gap-y-2 justify-between w-4/5 overflow-hidden">
					{isPlaying && (
						<>
							<div className="flex flex-col">
								<TitleSong
									progress_ms={data.progress_ms}
									item={data.item}
									is_playing={data.is_playing}
								/>
								<TrackArtist
									progress_ms={data.progress_ms}
									item={data.item}
									is_playing={data.is_playing}
								/>
							</div>
							<TrackDuration
								progress_ms={data.progress_ms}
								item={data.item}
								is_playing={data.is_playing}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	)
}