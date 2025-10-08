
"use client";

import { fontCormorantinfant, fontDoulaise, fontHastegi } from '@/app/fonts';
import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string
  message: string
  confirm: string
  included: string
  whose: string
};

const ConfirmSectionView: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>();

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      message: '',
      confirm: '',
      included: '',
      whose: ''
    }
  });

  const calculateTimeLeft = (): string => {
    const difference = +new Date(2025, 9, 28, 17, 39) - +new Date();
    let timeLeft: { days: number, hours: number, minutes: number, seconds: number } | null = null;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft ? `${String(timeLeft.days).padStart(2, '0')} : ${String(timeLeft.hours).padStart(2, '0')} : ${String(timeLeft.minutes).padStart(2, '0')} : ${String(timeLeft.seconds).padStart(2, '0')}` : '';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return (): void => clearTimeout(timer);
  }, [timeLeft]); // Re-run effect when timeLeft changes

  const onSubmit: SubmitHandler<Inputs> = (data) => console.error(data);

  return (
    <div
      className="flex flex-col w-1/4 justify-center items-center py-4"
      style={{
        backgroundImage: "url('/wedding/images/confirm-bg-left.png'), url('/wedding/images/confirm-bg-right.png'), url('/wedding/images/decision-bg.jpg')",
        backgroundRepeat: "no-repeat, repeat-x, repeat",
        backgroundPosition: "top left, center center, bottom right",
        backgroundSize: "100% auto, 100% auto, cover"
      }}
    >
      {/* Text */}
      <span className={`${fontCormorantinfant.className} text-xl text-center`}>Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng! </span>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full px-4 space-y-3 pt-8'>
        <input {...register("name", { required: true })} placeholder='Tên của bạn' className='border rounded-md px-2 py-1' />
        <textarea {...register("message", { required: true })} placeholder='Gửi lời nhắn đến cô dâu chú rể' className='border rounded-md px-2' rows={4} />
        <select  {...register("confirm", { required: true })} className='border rounded-md px-2 py-1'>
          <option disabled value="">Bạn sẽ đến chứ?</option>
          <option value="yes">Mình chắc chắn sẽ đến</option>
          <option value="no">Xin lỗi mình bận rồi!</option>
        </select>
        <select  {...register("included", { required: true })} className='border rounded-md px-2 py-1'>
          <option disabled value="">Bạn tham dự cùng ai?</option>
          <option value="1">1 người</option>
          <option value="2">2 người</option>
          <option value="2">3 người</option>
          <option value="2">4 người</option>
        </select>
        <select required {...register("whose", { required: true })} className='border rounded-md px-2 py-1'>
          <option disabled value="">Bạn là khách mời của ai?</option>
          <option value="re">Chú rể</option>
          <option value="dau">Cô dâu</option>
        </select>
        <button type="submit" className='mt-2 border rounded-md px-2 py-2 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#8b0909] hover:text-[#edd9cc]'>
          Gửi lời nhắn
        </button>
      </form>

      {/* QR */}
      <div className='flex flex-col justify-center items-center space-y-2 w-full px-4 pt-2'>
        <button type="submit" className=' w-full py-2 border rounded-md px-2 cursor-pointer bg-[#8b0909] text-[#edd9cc]'>
          Mừng cưới
        </button>
      </div>

      {/* Countdown */}
      <div className='flex flex-col justify-center items-center pt-10 space-y-2'>
        <span className={`${fontDoulaise.className} text-6xl`}>Countdown</span>
        <span className={`${fontHastegi.className} text-6xl`}>{timeLeft}</span>
      </div>
    </div>
  );
};

export default ConfirmSectionView;
