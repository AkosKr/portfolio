import { useCallback } from 'react'

type props = {
  title: string;
  picturePath: string;
  url: string;
};

function TechCard({ title, picturePath, url }: props) {
  const openTech = useCallback(() => {
    window.open(url, "_blank");
  }, []);

  return (
    <div 
      onClick={openTech}
      className="flex flex-row gap-2 border-2 border-black rounded-lg px-2 py-1 bg-white cursor-pointer transition-all duration-300 hover:scale-110">
      <div className="flex place-items-center">
        <p className="text-black text-[12px] sm:text-[12px] md:text-[16px] lg:text-[14px]">
          {title}
        </p>
      </div>
      <div>
        <img
          src={picturePath}
          alt={title}
          className="rounded-lg w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px] xl:w-[32px] xl:h-[32px]"
        />
      </div>
    </div>
  );
}

export default TechCard;
