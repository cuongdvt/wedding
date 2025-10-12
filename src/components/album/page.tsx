import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { fontDoulaise } from '@/app/fonts';

const AlbumSectionView: React.FC = () => {
  return (
    <div className="album flex flex-col sm:w-1/4 w-full justify-center items-center py-10 space-y-8 px-4">
      {/* Text */}
      <div className="flex flex-col w-full justify-center space-y-2 ">
        <span className={`${fontDoulaise.className} text-5xl text-center`}>Our Album of Love</span>
      </div>

      {/* Image */}
      <div className="w-full flex flex-col space-y-2">
        <AnimationOnScroll animateIn="animate__zoomIn" className="flex w-full h-[240px] space-x-2">
          <Image
            src="/wedding/images/album/IMG_1441.JPG"
            alt="intro"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
            style={{ objectFit: 'cover' }}
          />
        </AnimationOnScroll>

        <div className="flex w-full space-x-2">
          <AnimationOnScroll animateIn="animate__fadeInDown" className="flex w-2/3">
            <Image src="/wedding/images/album/IMG_1443.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          </AnimationOnScroll>
          <div className="flex flex-col w-1/3 space-y-2">
            <AnimationOnScroll animateIn="animate__lightSpeedInRight" className="flex w-full">
              <Image src="/wedding/images/album/IMG_1444.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__lightSpeedInLeft" className="flex w-full">
              <Image src="/wedding/images/album/IMG_1424.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
        </div>

        <div className="flex w-full flex-col space-y-2">
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-full">
            <Image
              src="/wedding/images/album/IMG_1495.JPG"
              alt="intro"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
              style={{ objectFit: 'cover' }}
            />
          </AnimationOnScroll>
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__rotateInDownRight" className="w-1/2">
              <Image src="/wedding/images/album/IMG_1494.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__rotateInDownLeft" className="w-1/2">
              <Image src="/wedding/images/album/IMG_1496.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
        </div>

        <div className="flex w-full flex-col space-y-2">
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__fadeInTopRight" className="flex w-1/2">
              <Image src="/wedding/images/album/IMG_1492.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInTopLeft" className="flex w-1/2">
              <Image src="/wedding/images/album/IMG_1489.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__fadeInBottomRight" className="flex w-1/2">
              <Image
                src="/wedding/images/album/IMG_1490.JPG"
                alt="intro"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
                style={{ objectFit: 'cover' }}
              />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInBottomLeft" className="flex w-1/2">
              <Image
                src="/wedding/images/album/IMG_1491.JPG"
                alt="intro"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
                style={{ objectFit: 'cover' }}
              />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSectionView;
