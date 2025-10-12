import React, { useState } from 'react';
import useSound from 'use-sound';

const BackgroundAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [play, { stop }] = useSound('/wedding/sounds/background_music.mp3', { loop: true });

  const handleTogglePlay = (): void => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="sticky top-0">
      <button onClick={handleTogglePlay}>{isPlaying ? 'Pause Background Music' : 'Play Background Music'}</button>
    </div>
  );
};

export default BackgroundAudioPlayer;
