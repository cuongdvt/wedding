import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { fontBegatri, fontEbgaramond } from '@/app/fonts';

const DecisionSectionView: React.FC = () => {
  return (
    <div
      className="flex flex-col sm:w-1/4 w-full justify-center items-center py-10 space-y-8"
      style={{
        backgroundImage: "url('/wedding/images/decision-imior.png'), url('/wedding/images/decision-bg.jpg')",
      }}
    >
      {/* Text */}
      <div className="flex flex-col w-full justify-center items-center space-y-4">
        <span className={`${fontEbgaramond.className} text-4xl text-center uppercase`}>
          Quyết định <br /> bên nhau trọn đời
        </span>
        <span className={`${fontBegatri.className} text-5xl`}>Save the date</span>
        <span className={`${fontEbgaramond.className} text-4xl`}>28.10.2025</span>
      </div>

      {/* Image */}
      <AnimationOnScroll animateIn="animate__flipInY" className="w-3/4">
        <Image src="/wedding/images/2.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
      </AnimationOnScroll>
    </div>
  );
};

export default DecisionSectionView;
