import React from "react";
import { FaPlus } from "react-icons/fa";
import "./Form.css";
export default function Form({ newItems, setNewItems, AddNewItems }) {
  return (
    <>
      <form
        className="addForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="inputForm"
          type="text"
          required
          autoFocus
          placeholder="Add new items"
          value={newItems}
          onChange={(e) => setNewItems(e.target.value)}
        />
        <button type="submit" onClick={AddNewItems}>
          <FaPlus />
        </button>
      </form>
    </>
  );
}
