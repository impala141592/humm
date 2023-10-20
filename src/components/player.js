import React, { useState, useRef } from "react";

const SoundPlayer = ({ src, label, icon }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="sound-tile">
      <button
        className={`sound-button ${isPlaying ? "playing" : ""}`}
        onClick={togglePlay}
      >
        <img src={icon} alt={label} />
        <span>{label}</span>
      </button>
      <audio ref={audioRef} loop>
        <source src={src} type="audio/mpeg" />
      </audio>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className={`volume-control ${isPlaying ? "playing" : ""}`}
      />
    </div>
  );
};

export default SoundPlayer;
