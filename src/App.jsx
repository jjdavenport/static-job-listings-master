import { useState } from "react";
import data from "./components/assets/data.json";
import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/nav";

function App() {
  const [filterItem, setFilteredItem] = useState([]);

  const toggle = () => {
    setFilteredItem([]);
  };

  const filter = (item) => {
    if (!filterItem.includes(item)) {
      setFilteredItem([...filterItem, item]);
    }
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
      <div className="flex h-full min-h-screen flex-col bg-lightGrayishCyanBg font-custom text-default font-medium">
        <div className="flex flex-1 flex-col gap-12">
          <div className="~md/2xl:~h-40/52 flex bg-desaturatedDarkCyan bg-mobile bg-cover bg-no-repeat p-4 md:bg-desktop"></div>
          <div className="~md/2xl:~px-4/20 -mt-[5rem] p-4 md:py-0">
            {filterItem.length > 0 ? (
              <Nav
                onClick={toggle}
                filterItems={filterItem}
                onDelete={deleteItem}
              />
            ) : null}
          </div>
          <main className="~md/2xl:~px-4/20 flex flex-col gap-10 p-4">
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
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
