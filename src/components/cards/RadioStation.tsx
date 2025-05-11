import { useState } from "react";
import RadioCard from "./RadioCard";
import { radioStations } from "../../data/mockData";
// Removed unused import for RadioStation

export const RadioStations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const genres = Array.from(new Set(radioStations.map(s => s.genre)));

  const filteredStations = radioStations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 space-y-8">
      {/* Search and Genre Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <input
          type="text"
          placeholder="Search radio stations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input pl-3 py-2 w-full border rounded"
        />
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setSelectedGenre(null)} className={`px-3 py-1 rounded-full ${selectedGenre ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>All</button>
          {genres.map(genre => (
            <button key={genre} onClick={() => setSelectedGenre(genre)} className={`px-3 py-1 rounded-full ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Radio Stations Display */}
      <h2 className="text-2xl font-bold mb-4">All Radio Stations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredStations.length > 0 ? filteredStations.map(station => (
          <RadioCard key={station.id} station={station} />
        )) : (
          <div className="text-gray-500">No stations found.</div>
        )}
      </div>
    </div>
  );
};