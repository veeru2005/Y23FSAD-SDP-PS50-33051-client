import React from 'react';
import { Play, Pause, MoreHorizontal } from 'lucide-react';
import { Song } from '../../types';
import { formatTime } from '../../utils/formatters';
import { usePlayerStore } from '../../store/playerStore';

interface SongCardProps {
  song: Song;
  index?: number;
  minimal?: boolean;
}

const SongCard: React.FC<SongCardProps> = ({ song, index, minimal = false }) => {
  const { currentSong, isPlaying, setCurrentSong, togglePlay } = usePlayerStore();

  const isCurrentSong = currentSong?.id === song.id;

  const handlePlay = () => {
    if (isCurrentSong) {
      togglePlay(); // Pause/Play functionality if it's the current song
    } else {
      setCurrentSong(song); // Set new song
      // Optionally handle queue addition logic here if needed
    }
  };

  // Minimal version for playlist/album view
  if (minimal) {
    return (
      <div
        className={`flex items-center justify-between p-3 rounded-md ${
          isCurrentSong ? 'bg-primary-50 dark:bg-primary-900/30' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <div className="flex items-center space-x-3">
          {index !== undefined && <span className="w-6 text-center text-gray-500">{index + 1}</span>}
          <div className="relative h-10 w-10 rounded overflow-hidden group cursor-pointer" onClick={handlePlay}>
            <img src={song.albumArt} alt={song.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {isCurrentSong && isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
            </div>
          </div>
          <div>
            <h4 className={`font-medium ${isCurrentSong ? 'text-primary-500' : ''}`}>{song.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{song.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">{formatTime(song.duration)}</span>
          <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  // Full card version
  return (
    <div className="card p-3 h-full">
      <div className="relative w-full aspect-square rounded-md overflow-hidden mb-3 group">
        <img src={song.albumArt} alt={song.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handlePlay}
            className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transform translate-y-2 group-hover:translate-y-0 transition-all"
          >
            {isCurrentSong && isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <h4 className="font-medium truncate">{song.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{song.artist}</p>
    </div>
  );
};

export default SongCard;