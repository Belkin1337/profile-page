type SpotifySong = {
  is_playing: boolean;
  progress_ms: number;
  item: {
    name: string;
    artists: {
      name: string;
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
};
