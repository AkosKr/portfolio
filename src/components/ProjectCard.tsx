import TechCard from "./TechCard"

type Technology = {
  title: string,
  path: string
}

type props = {
  title: string,
  name: string,
  img: string,
  tech: Technology[],
}


function ProjectCard({title, name, img, tech}: props) {
  return (
    <div className="flex flex-col relative border-2 border-black rounded-xl p-2 w-[344px] h-[516px]">
      <div>   
        <h2 className="">{title}</h2>
      </div>
      <div>
        <h1>{name}</h1>
      </div>
      <div className="flex flex-row absolute bottom-5 left-4">
        {
          tech.map(t => 
            <TechCard title={t.title} picturePath={t.path} url={""} projectImage={true}/>
          )
        }
      </div>
    </div>
  );
}


export default ProjectCard;
