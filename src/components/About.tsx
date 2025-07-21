import Gmail from "/gmail.png";
import Github from "/github.png";
import Gitlab from "/gitlab.png";
import Linkedin from "/linkedin.png";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About() {
  const openGithub = useCallback(() => {
    window.open("https://github.com/AkosKr", "_blank");
  }, []);

  const openGitlab = useCallback(() => {
    window.open("https://gitlab.com/AkosKr", "_blank");
  }, []);

  const openGmail = useCallback(() => {
    window.open(
      "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFqxCnBtpmcTbrZTNqJfktCDVGFLDHfWbTBRWlVdkBqSxlwDRHlpJKgpZBzDgzvBVRXsGX",
      "_blank",
    );
  }, []);

  const openLinkedin = useCallback(() => {
    /*window.open("https://github.com/AkosKr", "_blank");*/
  }, []);

  return (
    <>
      <div className="min-h-full flex">
        <div className="flex max-w-screen-xl mx-auto my-10 md:my-auto h-full">
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full justify-around items-center">
            <div className="flex flex-col w-[80%] sm:w-[70%] md:w-[70%] lg:w-1/2 h-full justify-around items-center">
              <div className="flex flex-col gap-5 w-[95%] sm:w-[90%] lg:w-[85%]">
                <div className="flex flex-col gap-3">
                  <h1 className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[64px] leading-none font-bold">
                    HI,
                  </h1>
                  <h1 className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[64px] leading-none font-bold">
                    I'm Akos Kranics
                  </h1>
                </div>
                <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]/8 font-regular xl:text-justify">
                  I'm a full-stack developer interested in backend systems and
                  cybersecurity. I write maintainable code, work with modern
                  frameworks, and build applications that prioritize clarity,
                  reliability, and security.
                </p>
                <div className="flex flex-row gap-3 ">
                  <img
                    src={Github}
                    onClick={openGithub}
                    alt="GitHub"
                    className="w-[42px] h-[42px] p-1 rounded-md cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                  />
                  <img
                    src={Gitlab}
                    onClick={openGitlab}
                    alt="Gitlab"
                    className="w-[42px] h-[42px] p-1 rounded-md cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                  />
                  <img
                    src={Gmail}
                    onClick={openGmail}
                    alt="Gmail"
                    className="w-[42px] h-[42px] p-1 rounded-md cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                  />
                  <img
                    src={Linkedin}
                    onClick={openLinkedin}
                    alt="LinkedIn"
                    className="w-[42px] h-[42px] p-1 rounded-md cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                  />
                </div>
              </div>
              <div className="flex justify-start items-end w-[95%] sm:w-[90%] lg:w-[85%] h-[70px] lg:h-[100px]">
                <a
                  href="/KranicsAkosCV.pdf"
                  download="Kranics Akos's Resume"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="border-2 border-light-gray dark:border-gray rounded-xl p-2 
                 shadow-xl 
                 transition-all duration-300 ease-in-out
                 bg-button text-white dark:bg-button dark:text-black
                 hover:scale-105 
                 hover:shadow-lg hover:shadow-gray-500 
                 dark:hover:shadow-light-gray"
                  >
                    Resume
                    <FontAwesomeIcon
                      className="pl-2"
                      icon={faDownload}
                      bounce
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex w-[70%] lg:w-1/2 place-content-center">
              <img
                src="cropped_circle_image.png"
                className="w-[212px] h-[212px] sm:w-[312px] sm:h-[312px] md:w-[380px] md:h-[380px] xl:w-[425px] xl:h-[425px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
