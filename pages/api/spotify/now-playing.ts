import { SpotifySong } from "@/types/spotify";
import { NextApiRequest, NextApiResponse } from "next";
import { REFRESH_TOKEN, AUTH_TOKEN, NOW_PLAYING_ENDPOINT, TOKEN_ENDPOINT } from "@/shared/constants/spotify-api";

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${AUTH_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      grant_type: "refresh_token",
      REFRESH_TOKEN,
    }),
  });

  return response.json();
}

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

    return res.status(200).json({ song });
  } catch {
    return res.status(500).end()
  }
}