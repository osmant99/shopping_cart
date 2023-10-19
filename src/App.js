import React, { useEffect, useState } from "react";
import Content from "./Content/Content";

function App() {
  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
  const [newItems, setNewItems] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    JSON.stringify(localStorage.setItem("shoppingList", JSON.stringify(items)));
  }, [items]);
  const handleCheck = (id) => {
    const listChecked = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItem(listChecked);
  };
  const AddNewItems = () => {
    if (newItems === "") {
      alert("Please add first");
    } else {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myItems = { id: id, checked: false, name: newItems };
      setItem([...items, myItems]);
      setNewItems("");
    }
  };

  const handleDelete = (id) => {
    const filterList = items.filter((item) => {
      return item.id !== id;
    });
    setItem(filterList);
  };
  return (
    <>
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        })}
        AddNewItems={AddNewItems}
        newItems={newItems}
        setNewItems={setNewItems}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}

export default App;
