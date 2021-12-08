import { useState, useEffect } from "react";
import index from "./index.css";
import Data from "./data";
import Card from "./Card";

function App() {
  // States
  const [items, setItems] = useState(null);
  const [active, setActive] = useState(1);

  // Getting Data
  useEffect(() => {
    // Get Items
    setTimeout(() => {
      setItems(Data);
    }, 2000);
    setTimeout(() => {
      // Getting li's after document load
      const li = document.querySelectorAll("li");
      window.addEventListener("click", (e) => {
        if (e.target.classList.contains("item1")) {
          setActive(1);
        } else if (e.target.classList.contains("item2")) {
          setActive(2);
        } else if (e.target.classList.contains("item3")) {
          setActive(3);
        } else if (e.target.classList.contains("item4")) {
          setActive(4);
        }
      });
    }, 2100);
  }, []);

  // Function to filter categories
  const getCategory = (category) => {
    const filteredItems = Data.filter((i) => i.category === category);
    setItems(filteredItems);
    setBtn();
  };

  // Get All Items
  const getItems = () => {
    setItems(Data);
  };

  // Set Active State
  const setBtn = () => {
    setActive(true);
  };

  return (
    <div className='container'>
      {items ? (
        <>
          <h1>Our Menu</h1>
          <ul className='flex'>
            <li
              className={active === 1 ? "item1 active" : "item1"}
              onClick={() => getItems()}
            >
              All
            </li>
            <li
              className={active === 2 ? "item2 active" : "item2"}
              onClick={() => {
                getCategory("Breakfast");
              }}
            >
              Breakfast
            </li>
            <li
              className={active === 3 ? "item3 active" : "item3"}
              onClick={() => {
                getCategory("Lunch");
              }}
            >
              Lunch
            </li>
            <li
              className={active === 4 ? "item4 active" : "item4"}
              onClick={() => getCategory("Shake")}
            >
              Shakes
            </li>
          </ul>
        </>
      ) : (
        <h2 style={{ textAlign: "center", paddingTop: "2rem" }}>Loading...</h2>
      )}
      {/* Rendered Items */}
      <div className='grid'>
        {items &&
          items.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
      </div>
    </div>
  );
}

export default App;
