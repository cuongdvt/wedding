import Image from 'next/image';

import { fontBegatri, fontHastegi } from '@/app/fonts';

const IntroSectionView: React.FC = () => {
  return (
    <div className="flex sm:w-1/4 w-full justify-center">
      {/* Image */}
      <div className="relative">
        <Image src="/wedding/images/album/JUL03684.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />

        {/* Name */}
        <div className="absolute bottom-0 left-0 px-5">
          <p className={`${fontHastegi.className} font-bold uppercase sm:text-8xl text-7xl tracking-wide`}>Cường</p>
          <span className={`${fontBegatri.className} font-bold uppercase sm:text-8xl text-7xl tracking-wide`}>&</span>
          <span className={`${fontHastegi.className} font-bold uppercase sm:text-8xl text-7xl tracking-wide`}>Phương</span>
        </div>
      </div>
    </div>
  );
};

export default IntroSectionView;
