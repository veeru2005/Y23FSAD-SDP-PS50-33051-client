import React, { useState } from 'react';
import { Search } from 'lucide-react';
import RadioCard from '../components/cards/RadioCard';
import { radioStations } from '../data/mockData';
const RadioPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const genres = Array.from(new Set(radioStations.map(station => station.genre)));

  const filteredStations = radioStations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         station.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? station.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="pt-20 pb-24 container mx-auto px-4 space-y-8">
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute inset-y-0 left-3 h-10 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search radio stations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input pl-10 w-full"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button className={`px-3 py-1 rounded-full text-sm ${selectedGenre === null ? 'bg-primary-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedGenre(null)}>All</button>
          {genres.map(genre => (
            <button key={genre} className={`px-3 py-1 rounded-full text-sm ${selectedGenre === genre ? 'bg-primary-500 text-white' : 'bg-gray-600'}`} onClick={() => setSelectedGenre(genre)}>
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Radio Stations List */}
      <h2 className="text-2xl font-bold mb-4">All Radio Stations</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredStations.length > 0 ? filteredStations.map(station => <RadioCard key={station.id} station={station} />) : <div className="text-center text-gray-500">No stations found.</div>}
      </div>
    </div>
  );
};

export default RadioPage;
