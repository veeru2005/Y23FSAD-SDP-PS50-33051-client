import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from "lucide-react";
import { usePlayerStore } from "../../store/playerStore";  // Use the Zustand store

const MusicPlayer: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    volume,
    setVolume,
    playNext,
    playPrevious,
    setCurrentSong,
    togglePlay,
  } = usePlayerStore();  // Accessing the global player store

  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Load song and attach events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;

    audio.src = currentSong.streamUrl;
    audio.volume = volume;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setProgress(audio.currentTime);
    const handleEnded = () => playNext();

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    // Try to autoplay
    audio.play().catch(() => {
      console.warn("Autoplay failed. Waiting for user interaction.");
    });

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSong, volume, playNext]);

  // Play/pause control
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    isPlaying ? audio.play().catch(console.error) : audio.pause();
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black shadow-lg border-t p-4 flex items-center justify-between text-white">
      {/* Hidden audio tag */}
      <audio ref={audioRef} />

      {/* Song Info */}
      <div className="flex items-center">
        <img src={currentSong.albumArt} alt={currentSong.title} className="h-12 w-12 rounded-md object-cover" />
        <div className="ml-3">
          <h4 className="font-medium">{currentSong.title}</h4>
          <p className="text-sm">{currentSong.artist}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 mx-4">
        <div className="flex items-center justify-between text-xs mb-1">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div
          className="cursor-pointer bg-gray-500 h-2 rounded-lg"
          onClick={(e) => {
            if (!audioRef.current) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const newProgress = ((e.clientX - rect.left) / rect.width) * duration;
            audioRef.current.currentTime = newProgress;
            setProgress(newProgress);
          }}
        >
          <div className="bg-primary-500 h-2 rounded-lg" style={{ width: `${(progress / duration) * 100}%` }} />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        <button onClick={playPrevious}><SkipBack className="h-5 w-5" /></button>
        <button
          onClick={togglePlay}
          className="p-3 bg-primary-500 rounded-full text-white"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button onClick={playNext}><SkipForward className="h-5 w-5" /></button>

        {/* Volume */}
        <button onClick={() => setVolume(volume === 0 ? 0.7 : 0)}>
          {volume === 0 ? <VolumeX className="h-5 w-5" /> : volume < 0.5 ? <Volume1 className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
