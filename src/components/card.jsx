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
    return "bg-lightGrayishCyanBg hover:bg-desaturatedDarkCyan md:h-fit rounded-md px-2 py-1 transition-colors duration-300 ease-in-out hover:text-white flex flex-wrap";
  };

  return (
    <article
      className={`${isNew && "border-l-4 border-desaturatedDarkCyan"} flex flex-col gap-2 rounded-md bg-white p-4 shadow-lg md:flex-row`}
    >
      <img className="-mt-10 w-14 md:mt-0 md:object-contain" src={logo} />
      <div className="flex flex-col divide-y-2 md:w-full md:flex-row md:justify-between md:gap-2 md:divide-y-0">
        <div className="flex flex-col gap-2 pb-3 md:pb-0">
          <div className="flex gap-4">
            <span className="font-bold text-desaturatedDarkCyan">
              {company}
            </span>
            {isNew ? (
              <span className="rounded-full bg-desaturatedDarkCyan px-2 uppercase text-white">
                New!
              </span>
            ) : null}
            {isFeatured ? (
              <span className="rounded-full bg-veryDarkGrayishCyan px-2 uppercase text-white">
                Featured
              </span>
            ) : null}
          </div>
          <span className="text-lg font-bold text-veryDarkGrayishCyan transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-desaturatedDarkCyan">
            {position}
          </span>
          <div className="flex gap-4 text-darkGrayishCyan">
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="~md/2xl:~gap-2/4 flex flex-wrap items-center pt-3 font-bold text-desaturatedDarkCyan md:pt-0">
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
