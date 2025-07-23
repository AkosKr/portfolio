type props = {
  path: string;
  title: string;
};

function ProjectTechImage({ path, title }: props) {
  return (
    <img
      src={path}
      alt={title}
      className="rounded-lg w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] xl:w-[20px] xl:h-[20px]"
    />
  );
}

export default ProjectTechImage;
