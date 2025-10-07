'use client';

import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fontBegatri, fontCormorantinfant, fontEbgaramond } from '@/app/fonts';

const InvitationSectionView: React.FC = () => {
  return (
    <div
      className="flex flex-col w-1/4 justify-center items-center px-4 py-12 space-y-8"
      style={{
        backgroundImage: "url('/wedding/images/decision-bg.jpg')",
      }}
    >
      {/* mời */}
      <span className={`${fontEbgaramond.className} text-2xl uppercase text-center`}>Thân mời tới dự lễ cưới thân mật của chúng tôi</span>

      {/* ten */}
      <div className="flex flex-col justify-center relative space-y-7">
        <div className="absolute left-1/2 top-1/2 -translate-1/2">
          <span
            className={`${fontBegatri.className} uppercase text-[160px] tracking-wide hover:opacity-100 opacity-35 transition-opacity duration-1000`}
          >
            &
          </span>
        </div>
        <span className={`${fontCormorantinfant.className} uppercase text-center text-5xl`}>Thái Cường</span>
        <span className={`${fontCormorantinfant.className} uppercase text-center text-5xl`}>Thu Phương</span>
      </div>

      {/* ảnh */}
      <div className="w-full flex flex-row-reverse justify-center">
        <div className="rotate-12 w-2/5 flex flex-col shadow-xl bg-neutral-200 rounded-sm">
          <Image src="/wedding/images/3.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto p-3" priority />
          <div className="h-8"></div>
        </div>
        <div className="-rotate-12 w-2/5 flex flex-col shadow-xl bg-neutral-200 rounded-sm">
          <Image src="/wedding/images/1.jpg" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto p-3" priority />
          <div className="h-8"></div>
        </div>
      </div>

      {/* nha trai/gai */}
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 flex flex-col border-r-2">
          <span className={`${fontCormorantinfant.className} text-center text-2xl font-bold`}>Nhà trai</span>
          <span className={`${fontCormorantinfant.className} text-center text-2xl`}>Ông: Dương Thái Bảo</span>
          <span className={`${fontCormorantinfant.className} text-center text-2xl`}>Bà: Vũ Thị Huê</span>
        </div>
        <div className="w-1/2 flex flex-col">
          <span className={`${fontCormorantinfant.className} text-center text-2xl font-bold`}>Nhà gái</span>
          <span className={`${fontCormorantinfant.className} text-center text-2xl`}>Ông: Lê Kim Chung</span>
          <span className={`${fontCormorantinfant.className} text-center text-2xl`}>Bà: Cao Thị Bắc</span>
        </div>
      </div>

      {/* Flower */}
      <div className="w-1/4 flex justify-center items-center">
        <Image src="/wedding/images/flower.png" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
      </div>

      {/* thiep */}
      <div className="w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
        >
          <SwiperSlide>
            <div className="w-full flex flex-col justify-center items-center py-2 space-y-3">
              <span className={`${fontCormorantinfant.className} text-xl uppercase text-center`}>tiệc nhà gái được tổ chức vào lúc</span>
              <div className="flex items-center space-x-4">
                <div className="border-y">
                  <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>16 giờ 30</span>
                </div>
                <span className={`${fontCormorantinfant.className} text-6xl uppercase text-center`}>27.10.2025</span>
                <div className="border-y">
                  <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>Thứ 2</span>
                </div>
              </div>
              <div className="w-1/6 flex justify-center items-center">
                <Image src="/wedding/images/ring.png" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
              </div>
              <div className="flex flex-col items-center space-x-4">
                <span className={`${fontCormorantinfant.className} text-3xl uppercase text-center`}>Nhà văn hoá thôn linh quy đông</span>
                <span className={`${fontCormorantinfant.className} text-xl text-center`}>ngõ 212 thôn Linh Quy Đông - Thuận An - Hà Nội</span>
              </div>
              <div className="flex items-center animate-bounce space-x-2">
                <Image src="/wedding/images/pin.png" alt="intro" width={25} height={25} priority />
                <span className={`${fontEbgaramond.className} text-xl text-center`}>Chỉ đường</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col justify-center items-center py-2 space-y-4">
              <span className={`${fontCormorantinfant.className} text-xl uppercase text-center`}>tiệc nhà gái được tổ chức vào lúc</span>
              <div className="flex items-center space-x-4">
                <div className="border-y">
                  <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>17 giờ 30</span>
                </div>
                <span className={`${fontCormorantinfant.className} text-6xl uppercase text-center`}>28.10.2025</span>
                <div className="border-y">
                  <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>Thứ 3</span>
                </div>
              </div>
              <div className="w-1/6 flex justify-center items-center">
                <Image src="/wedding/images/ring.png" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
              </div>
              <div className="flex flex-col items-center space-x-4">
                <span className={`${fontCormorantinfant.className} text-3xl uppercase text-center`}>Nhà văn hoá thôn linh quy đông</span>
                <span className={`${fontCormorantinfant.className} text-xl text-center`}>ngõ 212 thôn Linh Quy Đông - Thuận An - Hà Nội</span>
              </div>
              <div className="flex items-center animate-bounce space-x-2">
                <Image src="/wedding/images/pin.png" alt="intro" width={25} height={25} priority />
                <span className={`${fontEbgaramond.className} text-xl text-center`}>Chỉ đường</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default InvitationSectionView;
