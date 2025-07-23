type props = {
  title: String;
  description: String;
};

function Experience({ title, description }: props) {
  return (
    <div className="flex flex-col w-[20%] h-full place-items-center text-center">
      <div className="flex flex-col w-full h-[70%]">
        <div className="h-1/2 w-full">
          <h1 className="font-bold text-text-primary text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-center leading-none">
            {title}
          </h1>
        </div>
        <div className="flex-none h-1/2 w-full">
          <p className="font-regular text-text-secondary text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center leading-none">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
