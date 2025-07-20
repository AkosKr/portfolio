import { useTheme } from "./hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import About from "./components/About";

function PortfolioGUI() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth scrollbar-hide">
      <div className="sticky h-screen top-0 left-0 h-[0px]">
        <div className="flex flex-auto justify-around h-[100px] bg-bg items-center">
          <div></div>
          <nav className="flex flex-row top-0 place-content-center">
            <ul className="flex flex-row gap-10 p-10 text-md text-text-primary">
              <li>
                <a
                  className="hover:border-b-2 hover:border-text-primary"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-2 hover:border-text-primary"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-2 hover:border-text-primary"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <button className="flex-none" onClick={toggleTheme}>
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </button>
        </div>
      </div>

      <div id="about" className="snap-center snap-mandatory h-screen z-55">
        <About />
      </div>
      <div id="skills" className="snap-center snap-mandatory h-screen">
        <div className="relative min-h-screen flex">
          <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
            Skills
          </div>
        </div>
      </div>
      <div id="projects" className="snap-center snap-mandatory h-screen">
        <div className="relative min-h-screen flex">
          <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
            Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGUI;
