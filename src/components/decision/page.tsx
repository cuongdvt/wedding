import { fontBegatri, fontHastegi } from '@/app/fonts';
import Image from 'next/image';

const DecisionSectionView: React.FC = () => {
  return (
    <div className="flex h-full justify-center">
      {/* Image */}
      <div className='relative h-3/4'>
        <Image src="/images/1.jpg" alt="intro" width={0} height={0} sizes="100vh" className="w-auto h-full" priority />

        {/* Name */}
        <div className="absolute bottom-0 left-0 px-5">
          <p className={`${fontHastegi.className} font-bold uppercase text-8xl tracking-wide`}>Cường</p>
          <span className={`${fontBegatri.className} font-bold uppercase text-8xl tracking-wide`}>&</span>
          <span className={`${fontHastegi.className} font-bold uppercase text-8xl tracking-wide`}>Phương</span>
        </div>
      </div>
    </div>
  );
};

export default DecisionSectionView;
