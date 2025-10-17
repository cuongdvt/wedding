'use client';

import type React from 'react';

import AlbumSectionView from '@/components/album/page';
import BackgroundAudioPlayer from '@/components/audio/page';
import CalendarSectionView from '@/components/calendar/page';
import ConfirmSectionView from '@/components/confirm/page';
import DecisionSectionView from '@/components/decision/page';
import IntroSectionView from '@/components/intro/page';
import InvitationSectionView from '@/components/invitation/page';
import ThanksSectionView from '@/components/thanks/page';

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden justify-center items-center">
      {/* Intro Image */}
      <IntroSectionView />

      {/* Decision */}
      <DecisionSectionView />

      {/* Calendar */}
      <CalendarSectionView />

      {/* Calendar */}
      <InvitationSectionView />

      {/* album */}
      <AlbumSectionView />

      {/* confirm */}
      <ConfirmSectionView />

      {/* confirm */}
      <ThanksSectionView />

      {/* Music */}
      <div className="fixed inset-x-1 bottom-2">
        <BackgroundAudioPlayer />
      </div>
    </div>
  );
};

export default Home;
