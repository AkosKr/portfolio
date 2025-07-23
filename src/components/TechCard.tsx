type props = {
  title: string;
  picturePath: string;
  imageSize: Number;
};

function TechCard({ title, picturePath, imageSize }: props) {
  return (
    <div className="flex flex-row gap-2 border-2 border-black rounded-lg px-2 py-1 bg-white">
      <div className="flex place-items-center">
        <p className="text-black">{title}</p>
      </div>
      <div>
        <img
          src={picturePath}
          alt={title}
          style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default TechCard;
