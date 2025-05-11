export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Song {
  streamUrl: string;
  isRadio: any;
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: number;
  url: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  year: string;
  songs: Song[];
}

export interface Playlist {
  id: string;
  title: string;
  coverArt: string;
  songs: Song[];
  createdBy: string;
}

export interface RadioStation {
  streamUrl: string;
  id: string;
  name: string;
  genre: string;
  coverArt: string;
  description: string;
  currentListeners: number;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  monthlyListeners: number;
  albums: Album[];
}

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  queue: Song[];
}