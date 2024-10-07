import data from "./components/assets/data.json";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <main className="flex flex-col gap-4 p-4">
          {data.map((i, index) => (
            <Card
              key={index}
              isNew={i.new}
              isFeatured={i.featured}
              logo={i.logo}
              company={i.company}
              postedAt={i.postedAt}
              contract={i.contract}
              location={i.location}
              langauges={i.languages}
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
