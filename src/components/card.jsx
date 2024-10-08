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
  return (
    <article>
      <img src={logo} />
      <div className="flex gap-4">
        <span>{company}</span>
        {isFeatured ? <span>Featured</span> : null}
        {isNew ? <span>New!</span> : null}
      </div>
      <span>{position}</span>
      <div className="flex gap-4">
        <span>{postedAt}</span>
        <span>{contract}</span>
        <span>{location}</span>
      </div>
      <div className="flex gap-4">
        {languages.map((i, index) => (
          <button onClick={() => onClick(i)} key={index}>
            {i}
          </button>
        ))}
        {tools.map((i, index) => (
          <button onClick={() => onClick(i)} key={index}>
            {i}
          </button>
        ))}
        <button onClick={() => onClick(level)}>{level}</button>
        <button onClick={() => onClick(role)}>{role}</button>
      </div>
    </article>
  );
};

export default Card;
