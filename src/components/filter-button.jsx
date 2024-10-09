import icon from "./assets/icon-remove.svg";

const FilterButton = ({ onClick, text }) => {
  return (
    <div className="bg-lightGrayishCyanFilter flex rounded-l-md">
      <span className="text-desaturatedDarkCyan p-2 font-bold">{text}</span>
      <button
        className="bg-desaturatedDarkCyan rounded-r-md p-1"
        onClick={onClick}
      >
        <img src={icon} />
      </button>
    </div>
  );
};

export default FilterButton;
