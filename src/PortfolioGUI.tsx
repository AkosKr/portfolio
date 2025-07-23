import { useTheme } from "./hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function PortfolioGUI() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-screen flex flex-col">
      <header className="h-[100px] top-0 w-full bg-bg">
        <div className="flex flex-auto w-full justify-around h-[100px] bg-bg items-center">
          <div className="w-[20px] h-[20px]"></div>
          <nav>
            <ul className="flex flex-row gap-[20px] text-[16px] sm:gap-[50px] sm:text-[18px] text-text-primary">
              <li>
                <a className="hover-underline-animation" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover-underline-animation" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="hover-underline-animation" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex place-items-center">
            <div className="toggle-switch">
              <label className="switch-label">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={toggleTheme}
                  checked={theme === "light" ? true : false}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        <section className="snap-center snap-mandatory min-h-full flex flex-col justify-around">
          <About />
        </section>
        <section
          id="about"
          className="snap-center snap-mandatory min-h-full flex flex-col justify-around"
        >
          <AboutMe />
        </section>
        <section
          id="skills"
          className="snap-center snap-mandatory min-h-full flex flex-col justify-around"
        >
          <Skills />
        </section>
        <div id="projects" className="snap-center snap-mandatory h-full">
          <div className="relative min-h-screen flex">
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
              Projects
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PortfolioGUI;
