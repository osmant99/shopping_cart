import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Search from "../Search/Search";
import "./Content.css";
export default function Content({
  handleCheck,
  handleDelete,
  items,
  AddNewItems,
  newItems,
  setNewItems,
  search,
  setSearch,
}) {
  return (
    <>
      <main>
        <div className="shopping-cart">
          <Header />
          <Form
            newItems={newItems}
            setNewItems={setNewItems}
            AddNewItems={AddNewItems}
          />
          <Search search={search} setSearch={setSearch} />
          <section>
            {items.length ? (
              items.map((item) => (
                <div
                  className="shopping-controls"
                  key={item.id}
                  style={{ marginBottom: "1rem" }}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                  />
                  <label
                    style={
                      item.checked ? { textDecoration: "line-through" } : null
                    }
                  >
                    {item.name}
                  </label>
                  <FaTrashAlt
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              ))
            ) : (
              <span
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Your cart is empty
              </span>
            )}
          </section>
          <hr />
          <Footer />
        </div>
      </main>
    </>
  );
}
