import { create } from 'zustand';
import { PlayerState, Song } from '../types';

interface PlayerStore extends PlayerState {
  setCurrentSong: (song: Song) => void;
  togglePlay: () => void;
  setIsPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  playNext: () => void;
  playPrevious: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  queue: [],

  setCurrentSong: (song: Song) => {
    set({ currentSong: song, isPlaying: true, progress: 0, duration: song.duration });
  },

  togglePlay: () => {
    set((state) => ({ isPlaying: !state.isPlaying }));
  },

  setIsPlaying: (playing: boolean) => {
    set({ isPlaying: playing });
  },

  setVolume: (volume: number) => {
    set({ volume });
  },

  setProgress: (progress: number) => {
    set({ progress });
  },

  playNext: () => {
    const { currentSong, queue } = get();
    const currentIndex = queue.findIndex((song) => song.id === currentSong?.id);
    if (queue.length === 0) return;
    const nextIndex = (currentIndex + 1) % queue.length;
    set({
      currentSong: queue[nextIndex],
      progress: 0,
      isPlaying: true,
      duration: queue[nextIndex].duration,
    });
  },

  playPrevious: () => {
    const { currentSong, queue } = get();
    const currentIndex = queue.findIndex((song) => song.id === currentSong?.id);
    if (queue.length === 0) return;
    const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
    set({
      currentSong: queue[prevIndex],
      progress: 0,
      isPlaying: true,
      duration: queue[prevIndex].duration,
    });
  },
}));
