import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ListMusic } from 'lucide-react';
import { Playlist } from '../../types';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <Link to={`/playlist/${playlist.id}`} className="card overflow-hidden group h-full">
      <div className="relative">
        <img 
          src={playlist.coverArt} 
          alt={playlist.title} 
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transform translate-y-2 group-hover:translate-y-0 transition-all">
            <Play className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium truncate">{playlist.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          By {playlist.createdBy} • {playlist.songs.length} songs
        </p>
      </div>
    </Link>
  );
};

export default PlaylistCard;