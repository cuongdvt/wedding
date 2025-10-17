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
        {/* 1 to */}
        <AnimationOnScroll animateIn="animate__zoomIn" className="flex w-full h-[240px] space-x-2">
          <Image
            src="/wedding/images/album/JUL03224.jpg"
            alt="intro"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
            style={{ objectFit: 'cover' }}
          />
        </AnimationOnScroll>

        {/* 1 to 2 be ngang */}
        <div className="flex w-full space-x-2">
          <AnimationOnScroll animateIn="animate__fadeInDown" className="flex w-2/3">
            <Image src="/wedding/images/album/JUL03126.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          </AnimationOnScroll>
          <div className="flex flex-col w-1/3 space-y-2">
            <AnimationOnScroll animateIn="animate__lightSpeedInRight" className="flex w-full">
              <Image src="/wedding/images/album/JUL03042.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__lightSpeedInLeft" className="flex w-full">
              <Image src="/wedding/images/album/JUL03325.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
        </div>

        {/* 2 ngang */}
        <div className="flex w-full space-x-2">
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-1/2">
            <Image
              src="/wedding/images/album/JUL03919.jpg"
              alt="intro"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
              style={{ objectFit: 'cover' }}
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-1/2">
            <Image
              src="/wedding/images/album/JUL03829.jpg"
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

        {/* 1 ngang 2 doc */}
        <div className="flex w-full flex-col space-y-2">
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-full">
            <Image
              src="/wedding/images/album/JUL04277.jpg"
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
              <Image src="/wedding/images/album/JUL04308.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__rotateInDownLeft" className="w-1/2">
              <Image src="/wedding/images/album/JUL04188.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
        </div>

        {/* 1 to 2 be ngang */}
        <div className="flex w-full space-x-2">
          <AnimationOnScroll animateIn="animate__fadeInDown" className="flex w-2/3">
            <Image src="/wedding/images/album/JUL04441.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          </AnimationOnScroll>
          <div className="flex flex-col w-1/3 space-y-2">
            <AnimationOnScroll animateIn="animate__lightSpeedInRight" className="flex w-full">
              <Image src="/wedding/images/album/JUL04561.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__lightSpeedInLeft" className="flex w-full">
              <Image src="/wedding/images/album/JUL04602.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
        </div>

        {/* 2 ngang */}
        <div className="flex w-full space-x-2">
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-1/2">
            <Image
              src="/wedding/images/album/JUL04679.jpg"
              alt="intro"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
              style={{ objectFit: 'cover' }}
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-1/2">
            <Image
              src="/wedding/images/album/JUL04778.jpg"
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

        {/* 3 ngang 2 doc */}
        <div className="flex w-full flex-col space-y-2">
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__fadeInTopLeft" className="flex w-1/3">
              <Image src="/wedding/images/album/JUL04888.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInTopRight" className="flex w-1/3">
              <Image src="/wedding/images/album/JUL04958.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInTopLeft" className="flex w-1/3">
              <Image src="/wedding/images/album/JUL04985.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__fadeInBottomRight" className="flex w-1/2">
              <Image src="/wedding/images/album/JUL05150.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInBottomLeft" className="flex w-1/2">
              <Image src="/wedding/images/album/JUL05164.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__fadeInTopLeft" className="flex w-1/3">
              <Image src="/wedding/images/album/JUL05308.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInTopRight" className="flex w-1/3">
              <Image src="/wedding/images/album/JUL05324.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInTopLeft" className="flex w-1/3">
              <Image src="/wedding/images/album/JUL05356.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
        </div>

        {/* 1 ngang 2 doc */}
        <div className="flex w-full flex-col space-y-2">
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-full">
            <Image src="/wedding/images/album/JUL05791.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          </AnimationOnScroll>
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__rotateInDownRight" className="w-1/2">
              <Image src="/wedding/images/album/JUL05644.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__rotateInDownLeft" className="w-1/2">
              <Image src="/wedding/images/album/JUL05554.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
          <div className="flex w-full space-x-2">
            <AnimationOnScroll animateIn="animate__rotateInDownRight" className="w-1/3">
              <Image src="/wedding/images/album/JUL05577.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__rotateInDownLeft" className="w-1/3">
              <Image src="/wedding/images/album/JUL05626.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__rotateInDownLeft" className="w-1/3">
              <Image src="/wedding/images/album/JUL05865.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__jackInTheBox" className="flex w-full">
            <Image src="/wedding/images/album/JUL05446.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default AlbumSectionView;
