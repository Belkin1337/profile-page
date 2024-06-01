export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
export const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
export const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
export const AUTH_TOKEN = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")