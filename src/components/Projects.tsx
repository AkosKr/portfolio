import { projects } from "../data/projects"; 
import ProjectCard from "./projects/ProjectCard";

function Projects() {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col gap-6 lg:gap-20 max-w-screen-xl mx-auto my-10 md:my-auto pb-12">
          <div className="flex justify-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[64px] leading-none font-bold">
              Projects
            </h1>
          </div>
          <div className="flex flex-row flex-wrap gap-10 w-full justify-center items-center">
            {
              projects.map(p => 
                <ProjectCard title={p.title} name={p.name} img={p.image} tech={p.tech} />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
