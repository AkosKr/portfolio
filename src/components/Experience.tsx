type props = {
  title: String;
  description: String;
};

function Experience({ title, description }: props) {
  return (
    <div className="flex flex-col w-[20%] h-full place-items-center text-center">
      <div className="h-1/2 w-full">
        <h1 className="font-bold text-text-primary text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
          {title}
        </h1>
      </div>
      <div className="flex-none h-1/2 w-full">
        <p className="font-regular text-text-secondary text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Experience;
