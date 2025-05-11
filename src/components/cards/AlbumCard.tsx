import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';  // Import the Zustand store

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const { setCurrentSong } = usePlayerStore(); // Access the function to set the current song

  // Handle play button click
  const handlePlay = () => {
    const firstSong = album.songs[0]; // Assuming you want to play the first song in the album
    setCurrentSong(firstSong); // Set the current song in the Zustand store
  };

  return (
    <Link to={`/album/${album.id}`} className="card overflow-hidden group h-full">
      <div className="relative">
        <img
          src={album.coverArt}
          alt={album.title}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handlePlay} // Set the current song when the play button is clicked
            className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transform translate-y-2 group-hover:translate-y-0 transition-all"
          >
            <Play className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium truncate">{album.title}</h3>
        <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
          <span>{album.artist}</span>
          <span>•</span>
          <span>{album.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
