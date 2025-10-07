import type React from 'react';

import IntroSectionView from '@/components/intro/page';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Intro Image */}
      <IntroSectionView />
    </div>
  );
};

export default Home;
