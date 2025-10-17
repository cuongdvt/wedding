import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

const BackgroundAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [play, { pause }] = useSound('/wedding/sounds/background_music.mp3', { loop: true });

  const handleTogglePlay = (): void => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="w-auto">
      <button
        className="flex items-center space-x-1 px-2 py-1 rounded-2xl bg-[#edd9cc] cursor-pointer border border-[#8b0909]"
        onClick={handleTogglePlay}
      >
        {isPlaying ? <PauseCircleIcon className="size-8 text-[#8b0909]" /> : <PlayCircleIcon className="size-8 text-[#8b0909]" />}
        <p className="text-[#8b0909] text-sm">{'Ngày Đầu Tiên - Đức Phúc'}</p>
      </button>
    </div>
  );
};

export default BackgroundAudioPlayer;
