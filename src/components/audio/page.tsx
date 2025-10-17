import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import useSound from 'use-sound';

const BackgroundAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [play, { stop }] = useSound('/wedding/sounds/background_music.mp3', { loop: true, volume: 40 });

  const handleTogglePlay = (): void => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-auto">
      <button
        className="flex items-center space-x-1 px-2 py-1 rounded-2xl bg-[#edd9cc] cursor-pointer border border-[#8b0909]"
        onClick={handleTogglePlay}
      >
        {isPlaying ? <PauseCircleIcon className="size-8 text-[#8b0909]" /> : <PlayCircleIcon className="size-8 text-[#8b0909]" />}
        <p className="text-[#8b0909] text-sm">{'Một Đời - 14 Casper, Bon Nghiêm'}</p>
      </button>
    </div>
  );
};

export default BackgroundAudioPlayer;
