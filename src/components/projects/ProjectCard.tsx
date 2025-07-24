import ProjectTechCard from "./ProjectTechCard";

type Technology = {
  title: string;
  path: string;
};

type props = {
  title: string;
  name: string;
  img: string;
  tech: Technology[];
};

function ProjectCard({ title, name, img, tech }: props) {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="group cursor-pointer w-full w-[258px] h-[387px] lg:w-[344px] lg:h-[516px] rounded-2xl overflow-hidden transition-transform duration-300 transform-gpu hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-2xl hover:ring-1 hover:ring-white/30 flex flex-col justify-between p-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-inner"
    >
      <div>
        <h2 className="text-white text-[20px] sm:text-[22px] font-semibold drop-shadow-sm">
          {title}
        </h2>
        <h1 className="text-white italic text-[36px] sm:text-[42px] font-extrabold leading-tight drop-shadow">
          {name}
        </h1>
      </div>

      <div className="flex flex-wrap gap-1 mt-6">
        {tech.map((t, i) => (
         <ProjectTechCard
            key={i}
            title={t.title}
            picturePath={t.path}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
