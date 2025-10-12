'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { type SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { Tooltip } from 'react-tooltip';

import { fontCormorantinfant, fontDoulaise, fontEbgaramond, fontHastegi } from '@/app/fonts';
import sendMail from '@/libs/send-mail';

Modal.setAppElement('#confirm');

type Inputs = {
  name: string;
  message: string;
  confirm: string;
  included: string;
  whose: string;
};

const ConfirmSectionView: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>();
  const [modalThanksIsOpen, setThanksIsOpen] = useState(false);

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: '',
      message: '',
      confirm: '',
      included: '',
      whose: '',
    },
  });

  const calculateTimeLeft = (): string => {
    const difference = +new Date(2025, 9, 28, 17, 39) - +new Date();
    let timeLeft: { days: number; hours: number; minutes: number; seconds: number } | null = null;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft
      ? `${String(timeLeft.days).padStart(2, '0')} : ${String(timeLeft.hours).padStart(2, '0')} : ${String(timeLeft.minutes).padStart(2, '0')} : ${String(timeLeft.seconds).padStart(2, '0')}`
      : '';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return (): void => clearTimeout(timer);
  }, [timeLeft]); // Re-run effect when timeLeft changes

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const response = await sendMail({
      email: 'cuongdvt261@gmail.com',
      sendTo: values.whose == 're' ? 'duvuthacu261@gmail.com' : 'phuonglethu5921@gmail.com',
      subject: 'Xác nhận tham gia đám cưới',
      text: `
        Tên: ${values.name}
        Lời chúc: ${values.message}
        Xác nhận tham gia: ${values.confirm === 'co' ? 'Có' : 'Không'}
        Khách mời của: ${values.whose === 're' ? 'Chú rể' : 'Cô dâu'}
        Đi cùng: ${Number(values.included) === 0 ? '1 mình' : `${values.included} người`}
      `,
    });
    if (response?.messageId) {
      setThanksIsOpen(true);
    }
  };

  return (
    <div
      id="confirm"
      className="flex flex-col sm:w-1/4 w-full justify-center items-center pb-6 pt-10"
      style={{
        backgroundImage:
          "url('/wedding/images/confirm-bg-left.png'), url('/wedding/images/confirm-bg-right.png'), url('/wedding/images/decision-bg.jpg')",
        backgroundRepeat: 'no-repeat, repeat-x, repeat',
        backgroundPosition: 'top left, center center, bottom right',
        backgroundSize: '100% auto, 100% auto, cover',
      }}
    >
      {/* Text */}
      <AnimationOnScroll animateIn="animate__slideInUp text-center w-full">
        <span className={`${fontCormorantinfant.className} text-xl text-center`}>
          Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!{' '}
        </span>
      </AnimationOnScroll>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full px-4 space-y-3 pt-8">
        <input {...register('name', { required: true })} placeholder="Tên của bạn" className="border rounded-md px-2 py-1" />
        <textarea
          {...register('message', { required: true })}
          placeholder="Gửi lời nhắn đến cô dâu chú rể"
          className="border rounded-md px-2"
          rows={4}
        />
        <select {...register('confirm', { required: true })} className="border rounded-md px-2 py-1">
          <option disabled value="">
            Bạn sẽ đến chứ?
          </option>
          <option value="co">Mình chắc chắn sẽ đến</option>
          <option value="khong">Xin lỗi mình bận rồi!</option>
        </select>
        <select {...register('included', { required: true })} className="border rounded-md px-2 py-1">
          <option disabled value="">
            Bạn tham dự cùng ai?
          </option>
          <option value="0">1 mình</option>
          <option value="1">1 người</option>
          <option value="2">2 người</option>
          <option value="3">3 người</option>
          <option value="4">4 người</option>
        </select>
        <select required {...register('whose', { required: true })} className="border rounded-md px-2 py-1">
          <option disabled value="">
            Bạn là khách mời của ai?
          </option>
          <option value="re">Chú rể</option>
          <option value="dau">Cô dâu</option>
        </select>
        <button
          type="submit"
          className="mt-2 border rounded-md px-2 py-2 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#8b0909] hover:text-[#edd9cc]"
        >
          Gửi lời nhắn
        </button>
      </form>

      {/* QR */}
      <AnimationOnScroll animateIn="animate__slideInUp" className="flex flex-col justify-center items-center space-y-2 w-full px-4 pt-2">
        <button data-tooltip-id="qr" type="submit" className=" w-full py-2 border rounded-md px-2 cursor-pointer bg-[#8b0909] text-[#edd9cc]">
          Mừng cưới
        </button>
        <Tooltip id="qr" clickable={true} openOnClick={true} style={{ backgroundColor: '#8b0909', padding: 0 }}>
          <div className="flex w-[380px] items-center space-x-2 p-2">
            <div className="flex flex-col w-1/2 justify-center items-center border p-1 rounded-xl space-y-1">
              <Image
                src="https://img.vietqr.io/image/MB-0978812394-qr_only.png"
                alt="bank1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
              <span className={`${fontEbgaramond.className} text-lg`}>Dương Vũ Thái Cường</span>
              <span className={`${fontEbgaramond.className}`}>MB</span>
              <span className={`${fontEbgaramond.className}`}>0978812394</span>
            </div>
            <div className="flex flex-col w-1/2 justify-center items-center border p-2 rounded-xl space-y-1">
              <Image
                src="https://img.vietqr.io/image/MB-0334429908-qr_only.png"
                alt="bank2"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
              <span className={`${fontEbgaramond.className} text-lg`}>Lê Thu Phương</span>
              <span className={`${fontEbgaramond.className}`}>MB</span>
              <span className={`${fontEbgaramond.className}`}>0334429908</span>
            </div>
          </div>
        </Tooltip>
      </AnimationOnScroll>

      {/* Countdown */}
      <AnimationOnScroll animateIn="animate__tada" className="flex flex-col justify-center items-center pt-10 space-y-2">
        <span className={`${fontDoulaise.className} text-6xl`}>Countdown</span>
        <span className={`${fontHastegi.className} text-6xl`}>{timeLeft}</span>
      </AnimationOnScroll>

      <Modal
        isOpen={modalThanksIsOpen}
        onRequestClose={() => setThanksIsOpen(false)}
        contentLabel="Thanks Modal"
        style={{
          content: {
            backgroundImage:
              "url('/wedding/images/confirm-bg-left.png'), url('/wedding/images/confirm-bg-right.png'), url('/wedding/images/decision-bg.jpg')",
            backgroundRepeat: 'no-repeat, repeat-x, repeat',
            backgroundPosition: 'top left, center center, bottom right',
            backgroundSize: '100% auto, 100% auto, cover',
          },
        }}
      >
        <div className="flex flex-col">
          <div className="flex w-full">
            <div className="w-3/4"></div>
            <div className="border-b-2 w-1/4 text-end">
              BEST <br /> DAY <br /> EVER
            </div>
          </div>
          <div className={`${fontDoulaise.className} text-6xl text-end pt-4`}>Thank you</div>
          <Image src="/wedding/images/album/IMG_1444.JPG" alt="intro" width={0} height={0} sizes="100vw" className="w-full h-auto pt-4" priority />
          <span className={`${fontCormorantinfant.className} text-end pt-4`}>
            Những lời chúc này sẽ là động lực rất lớn giúp chúng mình bước vào một cánh cửa hôn nhân đầy mới mẻ.
          </span>
          <span className={`${fontCormorantinfant.className} text-2xl text-end pt-2`}>28-10-2025</span>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmSectionView;
