import { ProjectType } from "../../data/projects";


type ProjectCardProps = {
  project: ProjectType;
};

function ModalContent({ project }: ProjectCardProps) {
  return (
    <>
      <div className="w-full h-full bg-red-500">
        <div className="bg-green-500 w-full h-1/2"></div>
        <div className="bg-blue-500 w-full h-1/2">
          <div className="flex flex-row h-[20%] justify-between bg-red-500">
            <div className="flex flex-col justify-around">
              <h1>{project.nameOfProject}</h1>
              <div className="flex flex-row">
                <div>
                  <p>{project.devPart}</p>
                </div>
                <div>
                  <p>{project.startDate}</p>
                </div>
                <div>
                  <p>{project.timeToFinish}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-around">
              <button> Github </button>
              <button> Live Demo </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
