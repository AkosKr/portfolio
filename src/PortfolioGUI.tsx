import { useTheme } from "./hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import About from "./components/About";

function PortfolioGUI() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-screen flex flex-col">
      <header className="h-[100px] top-0 w-full bg-bg">
        <div className="flex flex-auto w-full justify-around h-[100px] bg-bg items-center">
          <div className="w-[20px] h-[20px]"></div>
          <nav>
            <ul className="flex flex-row gap-[50px] text-[18px] text-text-primary">
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
              <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faMoon} />
            ) : (
              <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faSun} />
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        <div id="about" className="snap-center snap-mandatory h-[110%] md:h-full">
          <About />
        </div>
        <div id="skills" className="snap-center snap-mandatory h-full">
          <div className="relative min-h-screen flex">
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
              Skills
            </div>
          </div>
        </div>
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
