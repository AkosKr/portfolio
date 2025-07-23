import TechCard from "./TechCard";

const skills = [
  {
    title: "Github",
    path: "/github.png",
    size: 32,
  },
  {
    title: "Gitlab",
    path: "/gitlab.png",
    size: 32,
  },
];

function Skills() {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col gap-6 lg:gap-20 max-w-screen-xl mx-auto my-10 md:my-auto pb-12">
          <div className="flex justify-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[64px] leading-none font-bold">
              Skills
            </h1>
          </div>
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full justify-around items-center">
            <div className="flex flex-col gap-12 sm:gap-16 w-[80%] sm:w-[70%] md:w-[70%] lg:w-1/2 h-full justify-around items-center">
              <div className="flex justify-around items-end w-[100%] sm:w-[90%] lg:w-[85%] h-[70px] lg:h-[100px]">
                {skills.map((skill) => (
                  <TechCard
                    title={skill.title}
                    picturePath={skill.path}
                    imageSize={skill.size}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-[70%] lg:w-1/2 place-content-center">
              <img
                src="hacker.svg"
                alt="Kranics Ákos Photo"
                className="w-[212px] h-[212px] sm:w-[312px] sm:h-[312px] md:w-[380px] md:h-[380px] xl:w-[425px] xl:h-[425px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
