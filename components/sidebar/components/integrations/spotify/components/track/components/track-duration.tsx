import { Progress } from "@/ui/components/progress"
import { formatDate } from "@/lib/utils/date/formatter"
import { SpotifySong } from "@/types/spotify"

export const TrackDuration = ({
  is_playing,
  progress_ms,
  item
}: SpotifySong) => {
  return (
    <div className="flex flex-row justify-between items-center gap-x-2">
      <p className=" text-white text-sm">
        {is_playing ? formatDate(progress_ms) : '00:00'}
      </p>
      <Progress value={(progress_ms / item.duration_ms) * 100} className="w-full" />
      <p className=" text-white text-sm">
        {is_playing ? formatDate(item.duration_ms) : '00:00'}
      </p>
    </div>
  )
}