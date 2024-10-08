import icon from "./assets/icon-remove.svg";

const FilterButton = ({ onClick, text }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={onClick}>
        <img src={icon} />
      </button>
    </div>
  );
};

export default FilterButton;
