import { NextApiRequest, NextApiResponse } from "next";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { 
        Authorization: `Bearer ${access_token}` 
      },
    });

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ 
        isPlaying: false 
      });
    }

    const song: SpotifySong = await response.json();
    const isPlaying: boolean = song.is_playing;
    const title: string = song.item.name;
    const artist: string = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album: string = song.item.album.name;
    const albumImageUrl: string = song.item.album.images[0].url;
    const songUrl: string = song.item.external_urls.spotify;
    const duration: number = song.item.duration_ms;
    const progress: number = song.progress_ms;

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      duration,
      progress,
    });

  } catch {
    return res.status(500).json({ 
      error: "Internal Server Error" 
    });
  }
}