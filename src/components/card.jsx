const Card = ({
  isFeatured,
  isNew,
  logo,
  company,
  location,
  contract,
  postedAt,
  langauges,
  tools,
  position,
  role,
  level,
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
        {langauges.map((i, index) => (
          <button key={index}>{i}</button>
        ))}
        {tools.map((i, index) => (
          <button key={index}>{i}</button>
        ))}
        <button>{level}</button>
        <button>{role}</button>
      </div>
    </article>
  );
};

export default Card;
