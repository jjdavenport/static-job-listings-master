import FilterButton from "./filter-button";

const Nav = ({ onClick, filterItems, onDelete }) => {
  return (
    <nav className="flex justify-between bg-white p-4">
      <div className="flex gap-2">
        {filterItems.map((i, index) => (
          <FilterButton key={index} text={i} onClick={() => onDelete(i)} />
        ))}
      </div>
      <button
        onClick={onClick}
        className="text-darkGrayishCyan hover:underline"
      >
        Clear
      </button>
    </nav>
  );
};

export default Nav;
