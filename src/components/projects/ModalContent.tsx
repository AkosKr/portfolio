import { ProjectType } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectTechCard from "./ProjectTechCard";

type ProjectCardProps = {
  project: ProjectType;
  closeModal: () => void;
};

function ModalContent({ project, closeModal }: ProjectCardProps) {
  return (
    <>
      <div className="w-full h-full">
        <div className="relative w-full h-[30%]">
          <button
            type="button"
            className="absolute top-4 right-4"
            onClick={closeModal}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="flex flex-col gap-2 w-full h-[70%] px-5 bg-[#334155]">
          <div className="flex flex-row h-[30%] justify-between">
            <div className="flex flex-col w-1/2 p-2 justify-center gap-2">
              <h1 className="text-left w-full font-bold text-[36px] sm:text-[42px] text-[#f1f5f9]">
                {project.nameOfProject}
              </h1>
              <div className="flex flex-row gap-5 w-full">
                <div className=" flex flex-row gap-2 place-items-center">
                  <img src="/icon/code.png" className="w-[16px] h-[16px]" />
                  <p className="text-center text-[#f1f5f9]">{project.devPart}</p>
                </div>
                <div className="flex flex-row gap-2 place-items-center">
                  <img src="/icon/calendar.png" className="w-[16px] h-[16px]" />
                  <p className="text-center text-[#f1f5f9]">{project.startDate}</p>
                </div>
                <div className="flex flex-row gap-2 place-items-center">
                  <img src="/icon/clock.png" className="w-[16px] h-[16px]" />
                  <p className="text-center text-[#f1f5f9]">{project.timeToFinish}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-end w-1/2 pr-8">
              <div>
                <button className="bg-[#2563eb] rounded-xl p-2 text-[#f1f5f9]">
                  {" "}
                  Github{" "}
                </button>
              </div>
              <div>
                <button className="bg-[#2563eb] rounded-xl p-2 text-[#f1f5f9]">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-2 ">
            <p className="text-[#f1f5f9]">{project.description}</p>
          </div>
          <div className="flex flex-row pt-5">
            <div className="flex flex-col gap-5 w-1/2">
              <h2 className="font-semibold text-[20px] sm:text-[26px] text-[#f1f5f9]">Technologies</h2>
              <div className="flex gap-3">
                {project.tech.map((p) => (
                  <ProjectTechCard title={p.title} picturePath={p.iconPath} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 w-1/2 list-disc">
              <h2 className="font-semibold text-[20px] sm:text-[26px] text-[#f1f5f9]">Features</h2>
              <div>
                {project.features.map((f) => (
                  <li className="text-[#f1f5f9]">{f}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
