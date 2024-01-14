
import { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../lib/spotify'

interface SpotifySong {
  is_playing: boolean;
  progress_ms: number,
  item: {
    name: string;
    artists: { 
      name: string,
      external_urls: { 
        spotify: string;
      };
    }[];
    album: {
      name: string;
      images: { url: string }[];
    };
    external_urls: { spotify: string };
    duration_ms: number;
  };
}

export default async (_:NextApiRequest, res:NextApiResponse) => {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song: SpotifySong = await response.json();
    const isPlaying: boolean = song.is_playing;
    const title: string = song.item.name;
    const artist: string = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album: string = song.item.album.name;
    const albumImageUrl: string = song.item.album.images[0].url;
    const songUrl: string = song.item.external_urls.spotify;
    const duration: number = song.item.duration_ms;
    const progress: number = song.progress_ms;

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=1');

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      duration,
      progress
    });

  } catch (error) {
    
    console.error('Error fetching now playing:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}