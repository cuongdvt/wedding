import Image from "next/image";

const IntroSectionView: React.FC = () => {
  return (
    <div className="flex relative h-full justify-center">
      {/* Image */}
      <Image
        src="/images/1.jpg"
        alt="intro"
        width={0}
        height={0}
        sizes="100vh"
        className="w-auto h-full"
        priority
      />

      {/* Name */}
      <div className="absolute bottom-0">
        <span className="font-icielnovecentosans font-bold ">Cường & Phương</span>
      </div>
    </div>
  );
}

export default IntroSectionView