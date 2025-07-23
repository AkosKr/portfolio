type props = {
  path: string;
  title: string;
};

function SkillTechImage({ path, title }: props) {
  return (
    <img
      src={path}
      alt={title}
      className="rounded-lg w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px] xl:w-[32px] xl:h-[32px]"
    />
  );
}

export default SkillTechImage;
