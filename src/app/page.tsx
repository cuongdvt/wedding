import type React from 'react';

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

      {/* confirm */}
      <ConfirmSectionView />

      {/* confirm */}
      <ThanksSectionView />
    </div>
  );
};

export default Home;
