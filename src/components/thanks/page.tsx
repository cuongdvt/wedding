'use client';

import { fontCormorantinfant, fontDoulaise } from '@/app/fonts';

const ThanksSectionView: React.FC = () => {
  return (
    <div
      className="thanks flex flex-col sm:w-1/4 w-full justify-center items-center px-4 py-12 space-y-8"
      style={{
        backgroundImage: "url('/wedding/images/3.JPG')",
      }}
    >
      {/* mời */}
      <span className={`${fontCormorantinfant.className} text-xl text-center font-[]`}>
        Cảm ơn bạn đã dành tình cảm cho chúng mình! Sự hiện diện của bạn chính là món quà ý nghĩa nhất và chúng mình vô cùng trân quý khi được cùng
        bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này!
      </span>

      {/* ten */}
      <span className={`${fontDoulaise.className} text-6xl pt-6`}>Thank you!</span>
    </div>
  );
};

export default ThanksSectionView;
