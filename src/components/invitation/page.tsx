'use client';

import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Tooltip } from 'react-tooltip';

import { fontBegatri, fontCormorantinfant, fontEbgaramond } from '@/app/fonts';

const InvitationSectionView: React.FC = () => {
  return (
    <div
      className="flex flex-col sm:w-1/4 w-full justify-center items-center sm:px-4 px-2 py-12 space-y-4"
      style={{
        backgroundImage: "url('/wedding/images/decision-bg.jpg')",
      }}
    >
      {/* mời */}
      <AnimationOnScroll animateIn="animate__fadeInUp" className="w-full text-center">
        <span className={`${fontEbgaramond.className} text-2xl uppercase py-2`}>
          Thân mời tới dự lễ cưới <br /> thân mật của chúng tôi
        </span>
      </AnimationOnScroll>

      {/* ten */}
      <div className="flex flex-col justify-center relative space-y-7 py-4">
        <AnimationOnScroll animateIn="animate__fadeInUp" className="absolute left-1/2 top-1/2 -translate-1/2">
          <span
            className={`${fontBegatri.className} uppercase text-[160px] tracking-wide hover:opacity-100 opacity-35 transition-opacity duration-1000`}
          >
            &
          </span>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft" className="w-full text-center">
          <span className={`${fontCormorantinfant.className} uppercase text-5xl`}>Thái Cường</span>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight" className="w-full text-center">
          <span className={`${fontCormorantinfant.className} uppercase text-center text-5xl`}>Thu Phương</span>
        </AnimationOnScroll>
      </div>

      {/* ảnh */}
      <div className="w-full flex flex-row-reverse justify-center py-4">
        <AnimationOnScroll animateIn="animate__flipInX" className="rotate-12 w-2/5 flex flex-col shadow-xl bg-neutral-200 rounded-sm">
          <Image src="/wedding/images/co_dau.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto p-3" priority />
          <div className="h-8"></div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInY" className="-rotate-12 w-2/5 flex flex-col shadow-xl bg-neutral-200 rounded-sm">
          <Image src="/wedding/images/chu_re.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto p-3" priority />
          <div className="h-8"></div>
        </AnimationOnScroll>
      </div>

      {/* nha trai/gai */}
      <div className="w-full flex justify-center items-center py-4">
        <div className="w-1/2 flex flex-col">
          <span className={`${fontCormorantinfant.className} text-center text-2xl font-bold`}>Nhà trai</span>
          <span className={`${fontCormorantinfant.className} text-center text-[22px]`}>Bố: Dương Thái Bảo</span>
          <span className={`${fontCormorantinfant.className} text-center text-[22px]`}>Mẹ: Vũ Thị Huê</span>
        </div>
        <div className="w-1/2 flex flex-col  border-l-1">
          <span className={`${fontCormorantinfant.className} text-center text-2xl font-bold`}>Nhà gái</span>
          <span className={`${fontCormorantinfant.className} text-center text-[22px]`}>Bố: Lê Kim Chung</span>
          <span className={`${fontCormorantinfant.className} text-center text-[22px]`}>Mẹ: Cao Thị Bắc</span>
        </div>
      </div>

      {/* Flower */}
      <div className="w-1/4 flex justify-center items-center">
        <Image src="/wedding/images/flower.png" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
      </div>

      {/* thiep */}
      <div className="w-full pt-2">
        <div className="w-full flex flex-col justify-center items-center py-2 space-y-4">
          <span className={`${fontCormorantinfant.className} text-xl uppercase text-center`}>
            tiệc nhà trai <br /> được tổ chức vào lúc
          </span>
          {/* thời gian */}
          <AnimationOnScroll animateIn="animate__zoomIn" className="flex items-center space-x-4">
            <div className="border-y">
              <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>17 giờ 30</span>
            </div>
            <span className={`${fontCormorantinfant.className} sm:text-6xl text-4xl uppercase text-center`}>28.10.2025</span>
            <div className="border-y">
              <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>Thứ 3</span>
            </div>
          </AnimationOnScroll>
          <div className="w-1/6 flex justify-center items-center">
            <Image src="/wedding/images/ring.png" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          </div>
          {/* địa chỉ */}
          <AnimationOnScroll animateIn="animate__slideInUp" className="flex flex-col items-center space-y-2">
            <span className={`${fontCormorantinfant.className} text-3xl uppercase text-center`}>
              Nhà khách 99 <br /> Quân chủng PK - KQ
            </span>
            <span className={`${fontCormorantinfant.className} text-xl text-center`}>Số 184 Trường Chinh - Kim Liên - Hà Nội</span>
          </AnimationOnScroll>
          {/* chỉ duong */}
          <div data-tooltip-id="nha_trai_addr" className="flex animate-bounce items-center space-x-2 cursor-pointer">
            <Image src="/wedding/images/pin.png" alt="intro" width={25} height={25} priority />
            <span className={`${fontEbgaramond.className} text-xl text-center underline underline-offset-3`}>Chỉ đường</span>
          </div>
          {/* map */}
          <Tooltip id="nha_trai_addr" clickable={true} openOnClick={true}>
            <div className="flex w-full items-center space-x-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.19907445894!2d105.831363!3d21.000662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7d042c7e53%3A0x7932c3bbcf187106!2zTmjDoCBLaMOhY2ggOTkgUXXDom4gQ2jhu6duZyBQaMOybmcgS2jDtG5nIEtow7RuZyBRdcOibg!5e0!3m2!1sen!2sus!4v1759888136179!5m2!1sen!2sus"
                width={'100%'}
                height={250}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Tooltip>
        </div>
        <div className="border-1 border-dashed w-full h-0.5"></div>
        <div className="w-full flex flex-col justify-center items-center pb-2 pt-4 space-y-4">
          <span className={`${fontCormorantinfant.className} text-xl uppercase text-center`}>
            tiệc nhà gái <br /> được tổ chức vào lúc
          </span>
          {/* thời gian */}
          <AnimationOnScroll animateIn="animate__zoomIn" className="flex items-center space-x-4">
            <div className="border-y">
              <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>17 giờ</span>
            </div>
            <span className={`${fontCormorantinfant.className} sm:text-6xl text-4xl uppercase text-center`}>27.10.2025</span>
            <div className="border-y">
              <span className={`${fontCormorantinfant.className} text-2xl uppercase text-center`}>Thứ 2</span>
            </div>
          </AnimationOnScroll>
          <div className="w-1/6 flex justify-center items-center">
            <Image src="/wedding/images/ring.png" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto" priority />
          </div>
          {/* địa chỉ */}
          <AnimationOnScroll animateIn="animate__slideInUp" className="flex flex-col items-center space-y-2">
            <span className={`${fontCormorantinfant.className} text-3xl uppercase text-center`}>
              Nhà văn hoá <br /> thôn linh quy đông
            </span>
            <span className={`${fontCormorantinfant.className} text-xl text-center`}>Ngõ 212 Linh Quy Đông - Thuận An - Hà Nội</span>
          </AnimationOnScroll>
          {/* chỉ duong */}
          <div data-tooltip-id="nha_gai_addr" className="flex animate-bounce items-center space-x-2 cursor-pointer">
            <Image src="/wedding/images/pin.png" alt="intro" width={25} height={25} priority />
            <span className={`${fontEbgaramond.className} text-xl text-center underline underline-offset-3`}>Chỉ đường</span>
          </div>
          {/* map */}
          <Tooltip id="nha_gai_addr" clickable={true} openOnClick={true}>
            <div className="flex w-full items-center space-x-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.1182702029444!2d105.9886732!3d21.0232194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a7ac6a222ce5%3A0x3b88ea7a6b14a630!2zTkjDgCBWxIJOIEjDk0EgVEjDlE4gTElOSCBRVVkgxJDDlE5H!5e0!3m2!1sen!2s!4v1759886908997!5m2!1sen!2s"
                width={'100%'}
                height={250}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default InvitationSectionView;
