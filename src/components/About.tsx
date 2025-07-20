import Gmail from "/gmail.png";
import Github from "/github-sign.png";
import Gitlab from "/gitlab.png";
import Linkedin from "/linkedin.png";
import { useCallback } from "react";

function About() {
  const openGithub = useCallback(() => {
    window.open("https://github.com/AkosKr", "_blank");
    console.log("Redirecting");
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex">
        <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
          <div className="flex flex-row justify-around">
            <div className="flex flex-col gap-3">
              <h1 className="text-[64px] font-bold">HI,</h1>
              <h1 className="text-[64px] font-bold">I'm Akos Kranics</h1>
              <p className="text-[24px] font-regular">
                I'm a full-stack developer interested in backend systems and
                cybersecurity. I write maintainable code, work with modern
                frameworks, and build applications that prioritize clarity,
                reliability, and security.
              </p>
              <div className="flex flex-row gap-5 p-2">
                <button
                  type="button"
                  onClick={() => {
                    console.log("CLICKED");
                    window.open("https://github.com/AkosKr", "_blank");
                  }}
                  className="p-0 border-none bg-red-500 relative z-[999]"
                >
                  <img
                    src={Github}
                    alt="GitHub"
                    className="w-[32px] h-[32px] cursor-pointer z-55 border border-red-500"
                  />
                </button>
                <img src={Gitlab} alt="Gmail" className="w-[32px] h-[32px]" />
                <img src={Linkedin} alt="Gmail" className="w-[32px] h-[32px]" />
                <img src={Gmail} alt="Gmail" className="w-[32px] h-[32px]" />
              </div>
              <div>
                <button type="button" className="border-2 p-2 ">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
