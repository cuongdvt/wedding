import type React from 'react';

import DecisionSectionView from '@/components/decision/page';
import IntroSectionView from '@/components/intro/page';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Intro Image */}
      <IntroSectionView />

      {/* Decision */}
      <DecisionSectionView />
    </div>
  );
};

export default Home;
