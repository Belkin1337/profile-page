import { Typography } from "@/ui/components/typography";
import { useScopedI18n } from "@/lib/i18n/i18n";
import { Track } from "@/components/sidebar/components/integrations/spotify/components/track/track";

export const SidebarSpotifyPreview = () => {
	const servicalT = useScopedI18n('servical')

	return (
		<div className="relative -top-0 mx-4 overflow-hidden rounded-xl p-4 bg-black/80">
			<Typography className="text-md lg:text-lg text-white cursor-default">
				{servicalT('Currently listening on Spotify')}:
			</Typography>
			<Track/>
		</div>
	)
}