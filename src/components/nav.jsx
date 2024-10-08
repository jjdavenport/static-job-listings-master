import FilterButton from "./filter-button";

const Nav = ({ onClick, filterItems, onDelete }) => {
  return (
    <nav>
      {filterItems.map((i, index) => (
        <FilterButton key={index} text={i} onClick={() => onDelete(i)} />
      ))}
      <button onClick={onClick} className="hover:underline">
        Clear
      </button>
    </nav>
  );
};

export default Nav;
