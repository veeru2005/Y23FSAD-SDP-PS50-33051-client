import React, { useRef, useState } from "react";
import { Play, Pause, Radio } from "lucide-react";
import { RadioStation } from "./RadioStation";

interface RadioCardProps {
  station: RadioStation;
}

const RadioCard: React.FC<RadioCardProps> = ({ station }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(station.streamUrl);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => {
          console.error("Stream playback failed:", error);
          alert("Cannot play stream. Try another station.");
        });
    }
  };

  return (
    <div className="card shadow-md border rounded overflow-hidden">
      <div className="relative bg-gray-200 h-48 flex items-center justify-center">
        <Radio className="h-12 w-12 text-blue-600" />
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">LIVE</div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{station.name}</h3>
        <p className="text-sm text-gray-500">{station.genre} | {station.country}</p>
        <button onClick={handlePlayPause} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default RadioCard;