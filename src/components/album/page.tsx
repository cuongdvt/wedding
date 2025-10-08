import Image from 'next/image';

import { fontDoulaise, fontEbgaramond } from '@/app/fonts';

const AlbumSectionView: React.FC = () => {
  return (
    <div
      className="album flex flex-col sm:w-1/4 w-full justify-center items-center py-10 space-y-8 px-4"
    >
      {/* Text */}
      <div className="flex flex-col w-full justify-center space-y-2 ">
        <span className={`${fontDoulaise.className} text-6xl`}>Our memories</span>
        <span className={`${fontEbgaramond.className} text-xl pr-5`}>This album captures the most beautiful moments of our special day—filled with love, joy, and unforgettable memories. From our heartfelt vows to the first dance, every photo tells a story of our journey together. Surrounded by family and friends, we celebrated a love that will last a lifetime.</span>
      </div>

      {/* Image */}
      <div className="flex w-full space-x-2">
        <div className="flex w-2/3">
          <Image src="/wedding/images/1.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
        </div>
        <div className="flex flex-col w-1/3 space-y-2">
          <Image src="/wedding/images/2.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          <Image src="/wedding/images/3.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
        </div>
      </div>
    </div>
  );
};

export default AlbumSectionView;
