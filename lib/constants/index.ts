const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const AUTH_TOKEN = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")

const USER_LINK = "https://open.spotify.com/user/31veybhgwnxxou5l2shlctvaeknm"
const GITHUB_PROFILE_LINK = "https://github.com/Belkin1337/profile-page"
const TELEGRAM_PROFILE_LINK = "https://t.me/kenuki_chan"

export {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  NOW_PLAYING_ENDPOINT,
  TOKEN_ENDPOINT,
  AUTH_TOKEN,
  USER_LINK,
  GITHUB_PROFILE_LINK,
  TELEGRAM_PROFILE_LINK
}