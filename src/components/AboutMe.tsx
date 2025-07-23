import Experience from "./Experience";

function AboutMe() {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col gap-6 lg:gap-20 max-w-screen-xl mx-auto my-10 md:my-auto pb-12">
          <div className="flex justify-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[64px] leading-none font-bold">
              About Me
            </h1>
          </div>
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full justify-around items-center">
            <div className="flex w-[70%] lg:w-1/2 place-content-center">
              <img
                src="hacker.svg"
                alt="Kranics Ákos Photo"
                className="w-[212px] h-[212px] sm:w-[312px] sm:h-[312px] md:w-[380px] md:h-[380px] xl:w-[425px] xl:h-[425px]"
              />
            </div>
            <div className="flex flex-col gap-12 sm:gap-16 w-[80%] sm:w-[70%] md:w-[70%] lg:w-1/2 h-full justify-around items-center">
              <div className="flex flex-col gap-6 w-[95%] sm:w-[90%] lg:w-[85%]">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]/8 font-regular">
                  I'm a full-stack software developer with a strong interest in
                  cybersecurity and software architecture. I 
                  secure web applications, exploring new technologies, and
                  solving real-world problems through code. Currently preparing
                  to begin an MSc in Cybersecurity at UBB, where I aim to deepen
                  my expertise in secure software design, vulnerability
                  analysis, and defensive development practices.
                </p>
              </div>
              <div className="flex justify-around items-end w-[100%] sm:w-[90%] lg:w-[85%] h-[70px] lg:h-[100px]">
                <Experience title="01" description="Years Experience" /> 
                <Experience title="01" description="Projects Created" />  
                <Experience title="XX" description="Certifications" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
