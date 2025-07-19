import { useTheme } from "./hooks/useTheme";

function PortfolioGUI() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="sticky top-0 place-items-center">
        <ul className="flex flex-row gap-5">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <button onClick={toggleTheme}>{theme === 'light' ? 'Hold' : 'Nap'}</button>
          </li>
        </ul>
      </nav>
      <div id="about" className="">
        <h1>About Me</h1>
        <p>This is the about section...</p>
      </div>
      <div id="projects" className="section">
        <h1>Projects</h1>
        <p>This is the projects section...</p>
      </div>
    </>
  );
}

export default PortfolioGUI;
