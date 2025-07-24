import { useCallback } from "react";

type props = {
  title: string;
  picturePath: string;
};

function ProjectTechCard({ title, picturePath }: props) {
  return (
    <div className="flex items-center justify-center gap-1 bg-white/20 backdrop-blur-md border border-white/30 text-white px-1 lg:px-2 py-1 rounded-md shadow-sm transition-transform duration-300 hover:scale-105">
      <img
        src={picturePath}
        alt={title}
        className="w-[18px] h-[18px] xl:w-[20px] xl:h-[20px]"
      />
      <p className="text-white text-center text-[8px] md:text-[10px] lg:text-[14px] leading-none">
        {title}
      </p>
    </div>
  );
}

export default ProjectTechCard;
