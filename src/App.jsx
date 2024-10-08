import { useState } from "react";
import data from "./components/assets/data.json";
import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/nav";

function App() {
  const [filtered, setFiltered] = useState(false);
  const [filterItem, setFilteredItem] = useState([]);

  const toggle = () => {
    setFiltered(!filtered);
    setFilteredItem([]);
  };

  const filter = (item) => {
    if (!filterItem.includes(item)) {
      setFilteredItem([...filterItem, item]);
    }
    setFiltered(true);
  };

  const deleteItem = (itemDelete) => {
    setFilteredItem(filterItem.filter((item) => item !== itemDelete));
  };

  const filteredData = data.filter((item) => {
    return filterItem.every(
      (filter) =>
        item.languages.includes(filter) ||
        item.tools.includes(filter) ||
        item.role === filter ||
        item.level === filter,
    );
  });

  return (
    <>
      <div>
        {filtered ? (
          <Nav
            onClick={toggle}
            filterItems={filterItem}
            onDelete={deleteItem}
          />
        ) : null}
        <main className="flex flex-1 flex-col gap-4 p-4">
          {(filteredData.length > 0 ? filteredData : data).map((i, index) => (
            <Card
              onClick={filter}
              key={index}
              isNew={i.new}
              isFeatured={i.featured}
              logo={i.logo}
              company={i.company}
              postedAt={i.postedAt}
              contract={i.contract}
              location={i.location}
              languages={i.languages}
              tools={i.tools}
              position={i.position}
              role={i.role}
              level={i.level}
            />
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
