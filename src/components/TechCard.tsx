import { useCallback } from "react";
import SkillTechImage from "./SkillTechImage";
import ProjectTechImage from "./ProjectTechImage";

type props = {
  title: string;
  picturePath: string;
  url: string;
  projectImage: boolean;
};

function TechCard({ title, picturePath, url, projectImage }: props) {
  const openTech = useCallback(() => {
    if (url === "") {
      return;
    }
    window.open(url, "_blank");
  }, []);

  return (
    <div
      onClick={openTech}
      className="flex flex-row gap-2 border-2 border-black rounded-lg px-2 py-1 bg-white cursor-pointer transition-all duration-300 hover:scale-110"
    >
      <div className="flex place-items-center">
        <p className="text-black text-[12px] sm:text-[12px] md:text-[16px] lg:text-[14px]">
          {title}
        </p>
      </div>
      <div>
        {projectImage ? (
          <ProjectTechImage path={picturePath} title={title} />
        ) : (
          <SkillTechImage path={picturePath} title={title} />
        )}
      </div>
    </div>
  );
}

export default TechCard;
