import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SongCard from '../components/cards/SongCard';
import AlbumCard from '../components/cards/AlbumCard';
import PlaylistCard from '../components/cards/PlaylistCard';
import RadioCard from '../components/cards/RadioCard';
import { 
  featuredPlaylists, 
  topRadioStations, 
  newReleases,
  songs,
  topArtists
} from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="pt-20 pb-24">
      {/* Hero Banner */}
      <div className="relative overflow-hidden h-64 md:h-80 lg:h-96 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-30" style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1500')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Welcome too ECHO MUSIC
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">
              Stream the latest music, discover new artists, and create your perfect playlist.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/explore" className="btn btn-primary">
                Explore Now
              </Link>
              <Link to="/radio" className="btn bg-white/20 hover:bg-white/30 text-white">
                Try Radio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 space-y-10">
        {/* New Releases */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">New Releases</h2>
            <Link to="/albums" className="flex items-center text-primary-500 hover:text-primary-600">
              <span>View All</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newReleases.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>

        {/* Featured Playlists */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Featured Playlists</h2>
            <Link to="/playlists" className="flex items-center text-primary-500 hover:text-primary-600">
              <span>View All</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featuredPlaylists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>

        {/* Radio Stations */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Radio Stations</h2>
            <Link to="/radio" className="flex items-center text-primary-500 hover:text-primary-600">
              <span>View All</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topRadioStations.map((station) => (
              <RadioCard key={station.id} station={station} />
            ))}
          </div>
        </section>

        {/* Trending Songs */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Trending Songs</h2>
            <Link to="/songs" className="flex items-center text-primary-500 hover:text-primary-600">
              <span>View All</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {songs.slice(0, 5).map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>

        {/* Top Artists */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Top Artists</h2>
            <Link to="/artists" className="flex items-center text-primary-500 hover:text-primary-600">
              <span>View All</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {topArtists.map((artist) => (
              <Link to={`/artist/${artist.id}`} key={artist.id} className="text-center group">
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-sm truncate">{artist.name}</h4>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
