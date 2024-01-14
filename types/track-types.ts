import { StaticImageData } from "next/image";

export interface TrackProps {
  data: {
    isPlaying: boolean;
    artist: string;
    artistUrl: string,
    title: string;
    albumImageUrl: string,
    album: string;
    duration: number;
    songUrl: string;
    progress: number
  };
}
