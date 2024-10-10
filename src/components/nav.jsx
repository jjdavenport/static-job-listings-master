import FilterButton from "./filter-button";

const Nav = ({ onClick, filterItems, onDelete }) => {
  return (
    <nav className="flex h-fit w-full justify-between rounded-md bg-white p-4">
      <div className="flex flex-wrap gap-4">
        {filterItems.map((i, index) => (
          <FilterButton key={index} text={i} onClick={() => onDelete(i)} />
        ))}
      </div>
      <button
        onClick={onClick}
        className="font-bold text-darkGrayishCyan transition-colors duration-300 ease-in-out hover:text-desaturatedDarkCyan hover:underline"
      >
        Clear
      </button>
    </nav>
  );
};

export default Nav;
