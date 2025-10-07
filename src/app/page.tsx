import IntroSectionView from '@/components/intro/page';
import type React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Intro Image */}
      <IntroSectionView />
    </div>
  );
}
