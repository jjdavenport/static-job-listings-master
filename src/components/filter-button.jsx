import icon from "./assets/icon-remove.svg";

const FilterButton = ({ onClick, text }) => {
  return (
    <div className="flex gap-1 rounded-l-md bg-lightGrayishCyanFilter">
      <span className="p-1 px-2 font-bold text-desaturatedDarkCyan">
        {text}
      </span>
      <button
        className="rounded-r-md bg-desaturatedDarkCyan p-1 px-2 transition-colors duration-300 ease-in-out hover:bg-veryDarkGrayishCyan"
        onClick={onClick}
      >
        <img src={icon} />
      </button>
    </div>
  );
};

export default FilterButton;
