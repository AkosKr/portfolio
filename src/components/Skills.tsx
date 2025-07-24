import TechCard from "./skills/TechCard";
import { tech, other } from "../data/skills";

function Skills() {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col gap-10 lg:gap-20 max-w-screen-xl mx-auto my-10 md:my-auto ">
          <div className="flex justify-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[64px] leading-none font-bold">
              Skills
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row w-full place-items-center">
            <div className="flex flex-col gap-2 md:gap-4 w-[80%] sm:w-[70%] md:w-[70%] lg:w-1/2 h-full place-items-center">
              <div className="flex flex-row flex-wrap gap-2 md:gap-4 w-full justify-center">
                {tech.map((t) => (
                  <TechCard
                    title={t.title}
                    picturePath={t.path}
                    url={t.url}
                  />
                ))}
              </div>
              <div className="flex flex-row flex-wrap gap-2 md:gap-4 w-full justify-center">
                {other.map((t) => (
                  <TechCard
                    title={t.title}
                    picturePath={t.path}
                    url={t.url}
                  />
                ))}
              </div>
              <div>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center">... and many more!</p>
              </div>
            </div>
            <div className="flex w-[70%] lg:w-1/2 h-full justify-center">
              <img
                src="tech.svg"
                alt="Kranics Ákos Photo"
                className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] xl:w-[480px] xl:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
