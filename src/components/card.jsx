const Card = ({
  isFeatured,
  isNew,
  logo,
  company,
  location,
  contract,
  postedAt,
  languages,
  tools,
  position,
  role,
  level,
  onClick,
}) => {
  const style = () => {
    return "bg-lightGrayishCyanBg hover:bg-desaturatedDarkCyan rounded-md px-2 py-1 transition-colors duration-300 ease-in-out hover:text-white";
  };

  return (
    <article
      className={`${isNew && "border-desaturatedDarkCyan border-l-4"} flex flex-col gap-2 rounded-md bg-white p-4 shadow-lg`}
    >
      <img className="-mt-10 w-12" src={logo} />
      <div className="divide-y-2">
        <div className="flex flex-col gap-1 pb-2">
          <div className="flex gap-4">
            <span className="text-desaturatedDarkCyan font-bold">
              {company}
            </span>
            {isFeatured ? (
              <span className="bg-veryDarkGrayishCyan rounded-full px-2 uppercase text-white">
                Featured
              </span>
            ) : null}
            {isNew ? (
              <span className="bg-desaturatedDarkCyan rounded-full px-2 uppercase text-white">
                New!
              </span>
            ) : null}
          </div>
          <span className="text-veryDarkGrayishCyan font-bold">{position}</span>
          <div className="text-darkGrayishCyan flex gap-4">
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="text-desaturatedDarkCyan flex flex-wrap gap-4 pt-2 font-bold">
          <button className={style()} onClick={() => onClick(role)}>
            {role}
          </button>
          <button className={style()} onClick={() => onClick(level)}>
            {level}
          </button>
          {languages.map((i, index) => (
            <button className={style()} onClick={() => onClick(i)} key={index}>
              {i}
            </button>
          ))}
          {tools.map((i, index) => (
            <button className={style()} onClick={() => onClick(i)} key={index}>
              {i}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
